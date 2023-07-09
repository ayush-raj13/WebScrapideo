from flask import Flask
from flask_cors import CORS
from flask import request
import pandas as pd
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.get("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.post("/run/generate")
def scrapper():
    uri = request.get_json().get('url', '')
    Product_name_bool = request.get_json().get('Product_name', '')
    Current_price_bool = request.get_json().get('Current_price', '')
    Original_price_bool = request.get_json().get('Original_price', '')
    Discount_bool = request.get_json().get('Discount', '')
    Rating_bool = request.get_json().get('Rating', '')
    Fassured_bool = request.get_json().get('Fassured', '')
    Highlight_bool = request.get_json().get('Highlight', '')
    Seller_bool = request.get_json().get('Seller', '')
    SellerRating_bool = request.get_json().get('SellerRating', '')
    Description_bool = request.get_json().get('Description', '')
    Product_url_bool = request.get_json().get('Product_url', '')
    Stock_bool = request.get_json().get('Stock', '')
    Image_src_bool = request.get_json().get('Image_src', '')

    Product_name = []
    Current_price = []
    Original_price = []
    Discount = []
    Rating = []
    Fassured = []
    Highlight = []
    Seller = []
    SellerRating = []
    Description = []
    Product_url = []
    Stock = []
    Image_src = []
    for i in range(1,10):
      uri=uri+str(i)
      r = requests.get(uri)
      soup = BeautifulSoup(r.text,"lxml")
      box = soup.find("div",class_=["_1YokD2 _3Mn1Gg"])

      urls=box.find_all("a",class_=["_1fQZEK", "_2rpwqI"])
      for i in urls:
        url = "https://www.flipkart.com" + i.attrs["href"]
        r1 = requests.get(url)
        soup1 = BeautifulSoup(r1.text,"lxml")
        box1 = soup1.find("div",class_=["_1YokD2 _3Mn1Gg col-8-12"])
        box2 = soup1.find("div",class_=["_1iyjIJ"])
        if(box1):
          # Name
          name = box1.find("span",class_="B_NuCI").text
          Product_name.append(name)
          # Current Price
          current_price = box1.find("div",class_="_30jeq3 _16Jk6d").text
          current_price = current_price.replace("₹", "Rs ")
          current_price = current_price.replace(",", "")
          Current_price.append(current_price)
          # Original Price
          if (box1.find("div",class_="_3I9_wc _2p6lqe")):
            original_price = box1.find("div",class_="_3I9_wc _2p6lqe").text
            original_price = original_price.replace("₹", "Rs ")
            original_price = original_price.replace(",", "")
            Original_price.append(original_price)
          else:
            Original_price.append("N/A")
          # Discount
          if (box1.find("div",class_="_3Ay6Sb _31Dcoz")):
            discount = box1.find("div",class_="_3Ay6Sb _31Dcoz")
            discount = discount.find("span").text
            Discount.append(discount)
          else:
            Discount.append("N/A")
          # Rating
          if(box1.find("div",class_="_2d4LTz")):
            rating = box1.find("div",class_="_2d4LTz").text
            rating = rating + " ("
            no_of_reviews_and_ratings = box1.find_all("div",class_="row _2afbiS")
            for i in no_of_reviews_and_ratings:
              rating = (rating + i.find("span").text.replace("&", "& ")).replace(",","")
            rating = rating + ")"
            Rating.append(rating)
          else:
            Rating.append("No ratings yet")
          # Flipkart assured
          fassured = False
          if (box1.find("span",class_="b7864- _2Z07dN")):
              fassured = True
          Fassured.append(fassured)
          # Highlight
          if (box1.find("div",class_="_2418kt")):
            highlight=""
            highlights = ((box1.find("div",class_="_2418kt")).find("ul")).find_all("li")
            for i in highlights:
              highlight = highlight + i.text + " | "
            Highlight.append(highlight)
          else:
            Highlight.append("N/A")
          # Seller
          seller = ((box1.find("div",class_="_1RLviY")).find("span")).find("span").text
          Seller.append(seller)
          # Seller's Rating
          if (box1.find("div",class_="_3LWZlK _1D-8OL")):
            sellerRating = box1.find("div",class_="_3LWZlK _1D-8OL").text
            SellerRating.append(sellerRating)
          else:
            SellerRating.append("N/A")
          # Description
          if (box1.find("div",class_="_1mXcCf RmoJUa")):
            description = box1.find("div",class_="_1mXcCf RmoJUa").text
            Description.append(description)
          else:
            Description.append("N/A")
          # Stock
          inStock = True
          if(box1.find("div",class_="_16FRp0")):
            inStock = False
          Stock.append(inStock)
          # Image URL
          image_URL = box2.find("img",class_="_396cs4 _2amPTt _3qGmMb").attrs["src"]
          Image_src.append(image_URL)
          # Product URL
          Product_url.append(url)

    df = pd.DataFrame({})
    if (Product_name_bool):
      df["Product_name"] = Product_name
    if (Current_price_bool):
      df["Current_price"] = Current_price
    if (Original_price_bool):
      df["Original_price"] = Original_price
    if (Discount_bool):
      df["Discount"] = Discount
    if (Rating_bool):
      df["Rating"] = Rating
    if (Fassured_bool):
      df["Fassured"] = Fassured
    if (Highlight_bool):
      df["Highlights"] = Highlight
    if (Seller_bool):
      df["Seller"] = Seller
    if (SellerRating_bool):
      df["SellerRating"] = SellerRating
    if (Description_bool):
      df["Description"] = Description
    if (Stock_bool):
      df["Stock"] = Stock
    if (Image_src_bool):
      df["Image_src"] = Image_src
    if (Product_url_bool):
      df["Product_url"] = Product_url

    df = df.to_json(orient='records')

    return df

def create_app():
   return app