---
layout: single
title: "Publications"
permalink: /writings/
author_profile: true
---

<style>
/* ── Carousel ────────────────────────────────────────── */
.pub-carousel {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1.8rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  background: #000;
  cursor: pointer;
}

.pub-slides {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
  will-change: transform;
}

.pub-slide {
  min-width: 100%;
  position: relative;
}

.pub-slide img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  opacity: 0.92;
}

.pub-slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.7rem 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
  color: #fff;
  font-size: 0.88em;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.pub-slide-caption a {
  color: #fff !important;
  text-decoration: none;
}

.pub-slide-caption a:hover {
  text-decoration: underline;
}

.pub-carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.6rem 0 0.2rem;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
}

.pub-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}

.pub-dot.active {
  background: #fff;
  transform: scale(1.3);
}

.pub-carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.18);
  border: none;
  color: #fff;
  font-size: 1.2em;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 2;
  backdrop-filter: blur(4px);
}

.pub-carousel-btn:hover { background: rgba(255,255,255,0.35); }
.pub-carousel-btn.prev { left: 10px; }
.pub-carousel-btn.next { right: 10px; }

/* ── Year headers ────────────────────────────────────── */
.writings-year-header {
  font-size: 1.3em;
  font-weight: 700;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--global-border-color, #e5e7eb);
  color: var(--global-text-color, #111827);
  letter-spacing: -0.01em;
}

/* ── Grid ────────────────────────────────────────────── */
.writings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.1rem;
  margin-bottom: 2rem;
}

.writing-card {
  background: var(--global-card-bg-color, #f8fafc);
  border: none;
  border-top: 3px solid var(--global-link-color, #0284c7);
  border-radius: 0 0 12px 12px;
  padding: 1.1rem 1.2rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.writing-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.09);
}

.writing-card a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
  line-height: 1.45;
  color: var(--global-text-color, #111827);
  letter-spacing: -0.01em;
  transition: color 0.15s;
}

.writing-card a:hover { color: var(--global-link-color, #0284c7); }

.writing-meta {
  font-size: 0.78em;
  color: var(--global-muted-color, #6b7280);
  font-weight: 500;
}

.writing-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.2rem;
}

.writing-tag {
  background: var(--global-bg-color, #fff);
  color: var(--global-link-color, #0284c7);
  border-radius: 4px;
  padding: 0.15em 0.5em;
  font-size: 0.7em;
  font-weight: 500;
}

.writings-intro {
  font-size: 1.0em;
  margin-bottom: 1.5rem;
  color: var(--global-text-color, #374151);
  line-height: 1.7;
}

.writings-count-badge {
  display: inline-block;
  background: var(--global-link-color, #0284c7);
  color: #fff;
  border-radius: 20px;
  padding: 0.2em 0.8em;
  font-size: 0.82em;
  font-weight: 600;
  margin-left: 0.5rem;
  vertical-align: middle;
}
</style>

<!-- ── GIF Carousel ───────────────────────────────────── -->
<div class="pub-carousel" id="pubCarousel">
  <div class="pub-slides" id="pubSlides">
    <div class="pub-slide">
      <img src="/images/gifs/feature-1.gif" alt="FineTuning SAM2" />
      <div class="pub-slide-caption">
        <a href="https://learnopencv.com/finetuning-sam2/" target="_blank" rel="noopener">FineTuning SAM2 for Leaf Disease Segmentation</a>
      </div>
    </div>
    <div class="pub-slide">
      <img src="/images/gifs/feature-2.gif" alt="YOLO11" />
      <div class="pub-slide-caption">
        <a href="https://learnopencv.com/yolo11/" target="_blank" rel="noopener">YOLO11: Redefining Real-Time Object Detection</a>
      </div>
    </div>
    <div class="pub-slide">
      <img src="/images/gifs/feature-3.gif" alt="RetinaNet Wildlife" />
      <div class="pub-slide-caption">
        <a href="https://learnopencv.com/finetuning-retinanet-for-wildlife-detection/" target="_blank" rel="noopener">FineTuning RetinaNet for Wildlife Detection with PyTorch</a>
      </div>
    </div>
    <div class="pub-slide">
      <img src="/images/gifs/feature-4.gif" alt="YOLOv8 Tracking" />
      <div class="pub-slide-caption">
        <a href="https://learnopencv.com/yolov8-object-tracking-and-counting-with-opencv/" target="_blank" rel="noopener">YOLOv8 Object Tracking and Counting with OpenCV</a>
      </div>
    </div>
  </div>
  <button class="pub-carousel-btn prev" id="pubPrev" aria-label="Previous">&#8249;</button>
  <button class="pub-carousel-btn next" id="pubNext" aria-label="Next">&#8250;</button>
  <div class="pub-carousel-dots" id="pubDots">
    <button class="pub-dot active" aria-label="Slide 1"></button>
    <button class="pub-dot" aria-label="Slide 2"></button>
    <button class="pub-dot" aria-label="Slide 3"></button>
    <button class="pub-dot" aria-label="Slide 4"></button>
  </div>
</div>

<script>
(function() {
  var slides = document.getElementById('pubSlides');
  var dots   = document.querySelectorAll('#pubDots .pub-dot');
  var total  = 4, current = 0, timer;

  function goTo(n) {
    current = (n + total) % total;
    slides.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, i) { d.classList.toggle('active', i === current); });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { timer = setInterval(next, 3200); }
  function stopAuto()  { clearInterval(timer); }

  document.getElementById('pubNext').addEventListener('click', function() { stopAuto(); next(); startAuto(); });
  document.getElementById('pubPrev').addEventListener('click', function() { stopAuto(); prev(); startAuto(); });
  dots.forEach(function(d, i) {
    d.addEventListener('click', function() { stopAuto(); goTo(i); startAuto(); });
  });
  document.getElementById('pubCarousel').addEventListener('mouseenter', stopAuto);
  document.getElementById('pubCarousel').addEventListener('mouseleave', startAuto);

  startAuto();
})();
</script>

<p class="writings-intro">
  All my technical articles published at <a href="https://learnopencv.com/author/ankan/" target="_blank" rel="noopener">LearnOpenCV</a> — covering Computer Vision, Deep Learning, LLMs, VLMs, and Robotics.
  <span class="writings-count-badge">26 articles</span>
</p>

<div class="writings-year-header">2025</div>

<div class="writings-grid">
  <div class="writing-card">
    <a href="https://learnopencv.com/object-detection-spatial-understanding-vlms-qwen2-5-vl/" target="_blank" rel="noopener">Object Detection and Spatial Understanding with VLMs ft. Qwen2.5-VL</a>
    <div class="writing-meta">Aug 5, 2025</div>
    <div class="writing-tags"><span class="writing-tag">VLMs</span><span class="writing-tag">Object Detection</span><span class="writing-tag">LLMs</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/finetuning-gemma-3n-for-medical-vqa/" target="_blank" rel="noopener">FineTuning Gemma 3n for Medical VQA on ROCOv2</a>
    <div class="writing-meta">Jul 15, 2025</div>
    <div class="writing-tags"><span class="writing-tag">VLMs</span><span class="writing-tag">Fine-tuning</span><span class="writing-tag">Medical AI</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/medgemma/" target="_blank" rel="noopener">MedGemma: Google's Medico VLM for Clinical QA, Imaging, and More</a>
    <div class="writing-meta">Jun 24, 2025</div>
    <div class="writing-tags"><span class="writing-tag">VLMs</span><span class="writing-tag">Medical AI</span><span class="writing-tag">LLMs</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/gr00t-n1-5-nvidia-vla-model/" target="_blank" rel="noopener">GR00T N1.5 Explained: NVIDIA's VLA Model for Humanoids</a>
    <div class="writing-meta">Jun 12, 2025</div>
    <div class="writing-tags"><span class="writing-tag">Robotics</span><span class="writing-tag">VLMs</span><span class="writing-tag">NVIDIA</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/smolvla/" target="_blank" rel="noopener">SmolVLA: Affordable & Efficient VLA Robotics on Consumer GPUs</a>
    <div class="writing-meta">Jun 5, 2025</div>
    <div class="writing-tags"><span class="writing-tag">Robotics</span><span class="writing-tag">VLMs</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/getting-started-with-qwen3/" target="_blank" rel="noopener">Getting Started with Qwen3 – The Thinking Expert</a>
    <div class="writing-meta">May 27, 2025</div>
    <div class="writing-tags"><span class="writing-tag">LLMs</span><span class="writing-tag">Fine-tuning</span><span class="writing-tag">NLP</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/medsam2/" target="_blank" rel="noopener">MedSAM2 Explained: One Prompt to Segment Anything in Medical Imaging</a>
    <div class="writing-meta">Apr 29, 2025</div>
    <div class="writing-tags"><span class="writing-tag">Segmentation</span><span class="writing-tag">Medical AI</span><span class="writing-tag">SAM2</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/google-a2a-protocol/" target="_blank" rel="noopener">Google's A2A Protocol: Here's What You Need to Know</a>
    <div class="writing-meta">Apr 21, 2025</div>
    <div class="writing-tags"><span class="writing-tag">Agentic AI</span><span class="writing-tag">LLMs</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/gpt-4o-image-generation/" target="_blank" rel="noopener">Introduction to GPT-4o Image Generation</a>
    <div class="writing-meta">Apr 3, 2025</div>
    <div class="writing-tags"><span class="writing-tag">Generative AI</span><span class="writing-tag">Diffusion</span><span class="writing-tag">LLMs</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/yolo11-on-raspberry-pi/" target="_blank" rel="noopener">YOLO11 on Raspberry Pi: Optimizing Object Detection for Edge Devices</a>
    <div class="writing-meta">Apr 1, 2025</div>
    <div class="writing-tags"><span class="writing-tag">YOLO</span><span class="writing-tag">Edge AI</span><span class="writing-tag">Raspberry Pi</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/finetuning-retinanet-for-wildlife-detection/" target="_blank" rel="noopener">FineTuning RetinaNet for Wildlife Detection with PyTorch</a>
    <div class="writing-meta">Mar 4, 2025</div>
    <div class="writing-tags"><span class="writing-tag">Object Detection</span><span class="writing-tag">PyTorch</span><span class="writing-tag">Fine-tuning</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/finetuning-sam2/" target="_blank" rel="noopener">FineTuning SAM2 for Leaf Disease Segmentation</a>
    <div class="writing-meta">Feb 4, 2025</div>
    <div class="writing-tags"><span class="writing-tag">SAM2</span><span class="writing-tag">Segmentation</span><span class="writing-tag">Fine-tuning</span></div>
  </div>
</div>

<div class="writings-year-header">2024</div>

<div class="writings-grid">
  <div class="writing-card">
    <a href="https://learnopencv.com/image-captioning-using-resnet-and-lstm/" target="_blank" rel="noopener">Image Captioning using ResNet and LSTM</a>
    <div class="writing-meta">Dec 31, 2024</div>
    <div class="writing-tags"><span class="writing-tag">Deep Learning</span><span class="writing-tag">NLP</span><span class="writing-tag">CV</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/introduction-to-speech-to-speech/" target="_blank" rel="noopener">Introduction to Speech to Speech: Most Efficient Form of NLP</a>
    <div class="writing-meta">Oct 29, 2024</div>
    <div class="writing-tags"><span class="writing-tag">Speech AI</span><span class="writing-tag">LLMs</span><span class="writing-tag">NLP</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/yolo11/" target="_blank" rel="noopener">YOLO11: Redefining Real-Time Object Detection</a>
    <div class="writing-meta">Oct 8, 2024</div>
    <div class="writing-tags"><span class="writing-tag">YOLO</span><span class="writing-tag">Object Detection</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/recommendation-system-using-vector-search-with-qdrant/" target="_blank" rel="noopener">Recommendation System using Vector Search with Qdrant</a>
    <div class="writing-meta">Aug 13, 2024</div>
    <div class="writing-tags"><span class="writing-tag">Vector DB</span><span class="writing-tag">RAG</span><span class="writing-tag">NLP</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/feature-matching-using-neural-networks/" target="_blank" rel="noopener">Introduction to Feature Matching Using Neural Networks</a>
    <div class="writing-meta">Jul 23, 2024</div>
    <div class="writing-tags"><span class="writing-tag">CV</span><span class="writing-tag">Deep Learning</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/cvpr-2024/" target="_blank" rel="noopener">CVPR 2024: An Overview and Key Papers</a>
    <div class="writing-meta">Jul 9, 2024</div>
    <div class="writing-tags"><span class="writing-tag">CV</span><span class="writing-tag">Research</span><span class="writing-tag">CVPR</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/yolov10/" target="_blank" rel="noopener">YOLOv10: The Dual-Head OG of YOLO Series</a>
    <div class="writing-meta">Jun 4, 2024</div>
    <div class="writing-tags"><span class="writing-tag">YOLO</span><span class="writing-tag">Object Detection</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/mastering-recommendation-systems/" target="_blank" rel="noopener">Mastering Recommendation System: A Complete Guide</a>
    <div class="writing-meta">May 21, 2024</div>
    <div class="writing-tags"><span class="writing-tag">Deep Learning</span><span class="writing-tag">NLP</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/sdxl-inpainting/" target="_blank" rel="noopener">SDXL Inpainting: Fusing Image Inpainting with Stable Diffusion</a>
    <div class="writing-meta">Apr 30, 2024</div>
    <div class="writing-tags"><span class="writing-tag">Generative AI</span><span class="writing-tag">Diffusion</span><span class="writing-tag">SDXL</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/gradio-with-opencv-dnn/" target="_blank" rel="noopener">Integrating Gradio with OpenCV DNN</a>
    <div class="writing-meta">Apr 9, 2024</div>
    <div class="writing-tags"><span class="writing-tag">OpenCV</span><span class="writing-tag">Gradio</span><span class="writing-tag">CV</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/ultralytics-explorer-api/" target="_blank" rel="noopener">Introduction to Ultralytics Explorer API</a>
    <div class="writing-meta">Mar 5, 2024</div>
    <div class="writing-tags"><span class="writing-tag">YOLO</span><span class="writing-tag">Ultralytics</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/yolov9/" target="_blank" rel="noopener">YOLOv9: Advancing the YOLO Legacy</a>
    <div class="writing-meta">Feb 29, 2024</div>
    <div class="writing-tags"><span class="writing-tag">YOLO</span><span class="writing-tag">Object Detection</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/yolov8-object-tracking-and-counting-with-opencv/" target="_blank" rel="noopener">YOLOv8 Object Tracking and Counting with OpenCV</a>
    <div class="writing-meta">Jan 30, 2024</div>
    <div class="writing-tags"><span class="writing-tag">YOLO</span><span class="writing-tag">Object Tracking</span><span class="writing-tag">OpenCV</span></div>
  </div>
  <div class="writing-card">
    <a href="https://learnopencv.com/moving-object-detection-with-opencv/" target="_blank" rel="noopener">Moving Object Detection with OpenCV using Contour Detection and Background Subtraction</a>
    <div class="writing-meta">Jan 9, 2024</div>
    <div class="writing-tags"><span class="writing-tag">OpenCV</span><span class="writing-tag">Object Detection</span><span class="writing-tag">CV</span></div>
  </div>
</div>

<p style="margin-top: 1.5rem;">
  <a href="https://learnopencv.com/author/ankan/" target="_blank" rel="noopener" class="btn btn--primary">View on LearnOpenCV →</a>
</p>
