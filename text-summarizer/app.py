from flask import Flask
from flask_cors import CORS
from flask import request
from sumy.parsers.plaintext import PlaintextParser
from sumy.parsers.html import HtmlParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words
import nltk
nltk.download('punkt')

app = Flask(__name__)
CORS(app)

@app.get("/")
def index():
    return "<h1>Hello!</h1>"

@app.post("/run/predict")
def summarize():
  method, language, sentence_count, input_type, input_, *rest = request.get_json().get('data', '')
  if method== 'LSA':
    from sumy.summarizers.lsa import LsaSummarizer as Summarizer
  if method=='text-rank':
    from sumy.summarizers.text_rank import TextRankSummarizer as Summarizer
  if method=='lex-rank':
    from sumy.summarizers.lex_rank import LexRankSummarizer as Summarizer
  if method=='edmundson':
    from sumy.summarizers.edmundson import EdmundsonSummarizer as Summarizer
  if method=='luhn':
    from sumy.summarizers.luhn import LuhnSummarizer as Summarizer
  if method=='kl-sum':
    from sumy.summarizers.kl import KLSummarizer as Summarizer
  if method=='random':
    from sumy.summarizers.random import RandomSummarizer as Summarizer
  if method=='reduction':
    from sumy.summarizers.reduction import ReductionSummarizer as Summarizer

  if input_type=="URL":
    parser = HtmlParser.from_url(input_, Tokenizer(language))
  if input_type=="text":
    parser = PlaintextParser.from_string(input_, Tokenizer(language))
    
  stemmer = Stemmer(language)
  summarizer = Summarizer(stemmer)
  stop_words = get_stop_words(language)

  if method=='edmundson':
    summarizer.null_words = stop_words
    summarizer.bonus_words = parser.significant_words
    summarizer.stigma_words = parser.stigma_words
  else:
    summarizer.stop_words = stop_words

  summary_sentences = summarizer(parser.document, sentence_count)
  summary = ' '.join([str(sentence) for sentence in summary_sentences])
  
  return summary

def create_app():
   return app