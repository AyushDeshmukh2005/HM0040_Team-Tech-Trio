from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled
import nltk
from nltk.tokenize import sent_tokenize
from heapq import nlargest
import re

def get_video_id(url):
    """Extracts the video ID from a YouTube URL."""
    match = re.search(r"v=([a-zA-Z0-9_-]{11})", url)
    return match.group(1) if match else None

def fetch_transcript(video_url):
    """Fetches the transcript of a YouTube video."""
    try:
        video_id = get_video_id(video_url)
        if not video_id:
            return "Invalid YouTube URL."
        
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        text = " ".join([entry['text'] for entry in transcript])
        return text
    except TranscriptsDisabled:
        return "Transcripts are disabled for this video."
    except Exception as e:
        return f"Error fetching transcript: {e}"

def summarize_text(text, num_sentences=3):
    """Summarizes the text by extracting key sentences."""
    nltk.download('punkt')
    sentences = sent_tokenize(text)
    
    if len(sentences) <= num_sentences:
        return text  
    
    word_frequencies = {}
    for word in nltk.word_tokenize(text):
        if word.lower() not in nltk.corpus.stopwords.words('english'):
            word_frequencies[word.lower()] = word_frequencies.get(word.lower(), 0) + 1
    
    sentence_scores = {sentence: sum(word_frequencies.get(word.lower(), 0) for word in sentence.split()) for sentence in sentences}
    summary_sentences = nlargest(num_sentences, sentence_scores, key=sentence_scores.get)
    
    return " ".join(summary_sentences)

def main():
    url = input("Enter YouTube Video URL: ")
    transcript = fetch_transcript(url)
    
    if "Error" in transcript or "Transcripts are disabled" in transcript:
        print(transcript)
    else:
        summary = summarize_text(transcript)
        print("\n🔹 **Video Summary:**")
        print(summary)

if __name__ == "__main__":
    main()
