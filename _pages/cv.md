---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.cv-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2rem;
  padding: 0.55em 1.3em;
  background: var(--link-color, #2196F3);
  color: #fff !important;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95em;
  text-decoration: none !important;
  transition: box-shadow 0.15s, transform 0.15s;
}
.cv-download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}
.cv-section-title {
  font-size: 1.3em;
  font-weight: 700;
  margin: 2rem 0 0.8rem 0;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--border-color, #e0e0e0);
}
.cv-entry {
  margin-bottom: 1.3rem;
  padding-left: 0.5rem;
}
.cv-entry-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.3rem;
  align-items: baseline;
}
.cv-entry-title {
  font-weight: 700;
  font-size: 1.0em;
}
.cv-entry-meta {
  font-size: 0.84em;
  color: var(--muted-text-color, #777);
}
.cv-entry-sub {
  font-size: 0.9em;
  color: var(--muted-text-color, #666);
  margin: 0.1rem 0 0.4rem 0;
  font-style: italic;
}
.cv-entry ul {
  margin: 0.3rem 0 0 0;
  padding-left: 1.3em;
  font-size: 0.9em;
  line-height: 1.65;
}
.cv-pub-item {
  margin-bottom: 0.7rem;
  font-size: 0.93em;
  line-height: 1.6;
}
.cv-pub-item a {
  font-weight: 600;
}
.cv-pub-note {
  font-size: 0.8em;
  color: var(--muted-text-color, #777);
  font-style: italic;
}
.cv-award-list {
  columns: 2;
  column-gap: 1.5rem;
  padding-left: 1.3em;
  font-size: 0.9em;
  line-height: 1.75;
}
@media (max-width: 500px) {
  .cv-award-list { columns: 1; }
}
.cv-tech-stack {
  font-size: 0.9em;
  line-height: 1.8;
}
.cv-tech-stack strong {
  display: inline-block;
  min-width: 110px;
  color: var(--muted-text-color, #666);
}
</style>

<a href="/files/ankan_ghosh_resume.pdf" class="cv-download-btn" download>&#11015; Download PDF Resume</a>

<div class="cv-section-title">Experience</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">Senior Machine Learning Engineer</span>
    <span class="cv-entry-meta">Sept 2025 &ndash; Present</span>
  </div>
  <p class="cv-entry-sub">AIVAR &mdash; AWS Partner &nbsp;|&nbsp; Bengaluru, India</p>
  <ul>
    <li>Leading all Vision projects, managing teams of 20+ Engineers.</li>
    <li>Delivered 3 projects: Medical image segmentation, Civil tile detection &amp; extraction, Finance OCR &amp; RAG pipeline using AWS (SageMaker, ECS, Batch, S3, DynamoDB, SQS, CloudWatch).</li>
    <li>Architecting solutions for clients including Swiggy, Licious, Zepto, and LendenClub.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">Senior Computer Vision Engineer</span>
    <span class="cv-entry-meta">Oct 2023 &ndash; Aug 2025</span>
  </div>
  <p class="cv-entry-sub">OpenCV &nbsp;|&nbsp; Bengaluru, India</p>
  <ul>
    <li>Led R&amp;D at OpenCV University; architected solutions from PoC to production with latest CV (CNNs, YOLO11, SAM2, ViT, OpenCV, DETR, SDXL, NeRF, 3DGS) and NLP (VLMs, PEFT, RLHF, SFT, LoRA, MCP, ADK).</li>
    <li>Worked on internal CRM OpenCV-SyncX; automated production deployment on AWS (EKS, EC2, Lambda, S3, RDS, DynamoDB).</li>
    <li>Engineered LLM workflow with 82.5% accuracy for sales call analysis using HuggingFace, OpenAI, FastAPI, WhisperX, deployed on AWS.</li>
    <li>Built OpenCV Demo Website; developed 20+ Computer Vision and LLM applications.</li>
    <li>Mentored junior engineers; assisted marketing &amp; sales; led the blog team.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">Computer Vision Intern</span>
    <span class="cv-entry-meta">Sep 2022 &ndash; Feb 2023</span>
  </div>
  <p class="cv-entry-sub">IIT Gandhinagar &nbsp;|&nbsp; Gandhinagar, India</p>
  <ul>
    <li>Implemented Depth Estimation on OAK-D camera and deployed on Jetson Nano.</li>
    <li>Contribution led to the startup being selected for the META XR Program.</li>
  </ul>
</div>

<div class="cv-section-title">Education</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">B.S. in Information Technology (AI)</span>
    <span class="cv-entry-meta">2020 &ndash; 2023</span>
  </div>
  <p class="cv-entry-sub">MAKAUT &nbsp;|&nbsp; Kolkata, India &nbsp;|&nbsp; <strong>CGPA: 9.2 / 10</strong></p>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">Deep Learning &amp; Artificial Intelligence</span>
    <span class="cv-entry-meta">Sep &ndash; Feb 2021</span>
  </div>
  <p class="cv-entry-sub">IIT Roorkee &nbsp;|&nbsp; Roorkee, India</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">Bolpur NNB High School</span>
    <span class="cv-entry-meta">May 2019</span>
  </div>
  <p class="cv-entry-sub">Kolkata, India &nbsp;|&nbsp; 10+2: 82% &nbsp;|&nbsp; 10th: 88%</p>
</div>

<div class="cv-section-title">Talks &amp; Workshops</div>

<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html %}
{% endfor %}</ul>

<div class="cv-section-title">Notable Publications</div>

<div class="cv-pub-item">
  <a href="https://learnopencv.com/finetuning-sam2/" target="_blank" rel="noopener">FineTuning SAM2 for Leaf Disease Segmentation</a> &mdash; LearnOpenCV, Feb 2025<br>
  <span class="cv-pub-note">200+ LinkedIn likes &middot; Step-by-step fine-tuning guide achieving 74% IoU</span>
</div>

<div class="cv-pub-item">
  <a href="https://learnopencv.com/yolo11/" target="_blank" rel="noopener">YOLO11: Redefining Real-Time Object Detection</a> &mdash; LearnOpenCV, Oct 2024<br>
  <span class="cv-pub-note">Cited by 2 academic papers &middot; Shared by Ultralytics official channels</span>
</div>

<div class="cv-pub-item">
  <a href="https://learnopencv.com/finetuning-retinanet-for-wildlife-detection/" target="_blank" rel="noopener">FineTuning RetinaNet for Wildlife Detection with PyTorch</a> &mdash; LearnOpenCV, Mar 2025<br>
  <span class="cv-pub-note">Featured at Dubai Expo &middot; 79% accuracy on wildlife detection</span>
</div>

<div class="cv-pub-item">
  <a href="https://learnopencv.com/yolov8-object-tracking-and-counting-with-opencv/" target="_blank" rel="noopener">YOLOv8 Object Tracking and Counting with OpenCV</a> &mdash; LearnOpenCV, Jan 2024<br>
  <span class="cv-pub-note">Led to job offer from Liquid Trees, San Francisco</span>
</div>

<p><a href="/writings/">View all 26 articles &rarr;</a></p>

<div class="cv-section-title">Personal Projects</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">PixelFusion</span>
    <span class="cv-entry-meta">16.5k Twitter views</span>
  </div>
  <p class="cv-entry-sub">Python, TensorFlow, Gradio, HuggingFace</p>
  <ul><li>Gradio demo for Artistic Neural Style Transfer. <a href="https://huggingface.co/spaces/ankanpy/pixelfusion" target="_blank" rel="noopener">Live Demo</a> &middot; <a href="https://github.com/ankanpy/pixelfusion" target="_blank" rel="noopener">GitHub</a></li></ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">SegMagine</span>
    <span class="cv-entry-meta">21k Twitter views</span>
  </div>
  <p class="cv-entry-sub">Python, PyTorch, Gradio, HuggingFace</p>
  <ul><li>Gradio demo for Segment Anything Model (SAM) by Meta. <a href="https://huggingface.co/spaces/ankanpy/segmagine" target="_blank" rel="noopener">Live Demo</a> &middot; <a href="https://github.com/ankanpy/segmagine" target="_blank" rel="noopener">GitHub</a></li></ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">DocuMind</span>
    <span class="cv-entry-meta">2k Twitter views</span>
  </div>
  <p class="cv-entry-sub">Llama, Qwen, Gemma, LangChain, Weaviate, Qdrant, Gradio</p>
  <ul><li>End-to-End RAG application for document analysis. <a href="https://huggingface.co/spaces/ankanpy/documind" target="_blank" rel="noopener">Live Demo</a></li></ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-title">MedGemma Medical Image Analysis</span>
  </div>
  <p class="cv-entry-sub">Python, Gemma3, PyTorch, Transformers, Gradio</p>
  <ul><li>Medical QnA and report generation using MedGemma. <a href="https://huggingface.co/spaces/ankanpy/medgemma-medical" target="_blank" rel="noopener">Live Demo</a></li></ul>
</div>

<div class="cv-section-title">Awards &amp; Certifications</div>

<ul class="cv-award-list">
  <li>SIH22 Finalist</li>
  <li>Hack4Bengal &mdash; 2nd Place</li>
  <li>Amazon ML Challenge &mdash; 47th</li>
  <li>Deep Learning Specialization</li>
  <li>Mastering OpenCV with Python</li>
  <li>AI for Everyone: Master the Basics</li>
  <li>GSSoC 2022 Contributor</li>
  <li>NVIDIA AI Summit 2024</li>
  <li>CCD 2023</li>
  <li>PyCon India 2023</li>
  <li>Google I/O Extended</li>
</ul>

<div class="cv-section-title">Tech Stack</div>

<div class="cv-tech-stack">
  <p><strong>5000+ lines:</strong> Python &bull; Gradio &bull; FastAPI &bull; Streamlit &bull; Keras &bull; PyTorch &bull; OpenCV &bull; C++ &bull; JAX &bull; Transformers &bull; Diffusers &bull; TRL &bull; LeRobot</p>
  <p><strong>1000+ lines:</strong> LangChain &bull; Ollama &bull; RAG &bull; TensorRT &bull; LlamaIndex &bull; vLLM &bull; Vector DB &bull; GGML &bull; LoRA &bull; RLHF &bull; SFT &bull; Unsloth &bull; RoPE &bull; Git &bull; Docker &bull; AWS &bull; GCP &bull; Kubernetes</p>
</div>
