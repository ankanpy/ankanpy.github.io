---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* ============================================================
   HERO
   ============================================================ */
.hero-section {
  padding: 2.5rem 0 2rem 0;
  border-bottom: 1px solid var(--border-color, #e0e0e0);
  margin-bottom: 2.5rem;
}

.hero-greeting {
  font-size: 2.4em;
  font-weight: 800;
  margin: 0 0 0.3rem 0;
  line-height: 1.15;
  letter-spacing: -0.5px;
}

.hero-typed-wrapper {
  font-size: 1.25em;
  font-weight: 500;
  min-height: 1.8em;
  margin-bottom: 1.1rem;
  color: var(--link-color, #2196F3);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.typed-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: currentColor;
  margin-left: 2px;
  animation: blink 0.75s step-end infinite;
  vertical-align: middle;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.hero-bio {
  font-size: 1.05em;
  line-height: 1.7;
  max-width: 680px;
  margin-bottom: 1.5rem;
  color: var(--text-color, #494e52);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.hero-cta a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55em 1.3em;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95em;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
}

.hero-cta a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}

.cta-primary {
  background: var(--link-color, #2196F3);
  color: #fff !important;
}

.cta-secondary {
  background: transparent;
  border: 2px solid var(--border-color, #e0e0e0);
  color: var(--text-color, #494e52) !important;
}

/* ============================================================
   STATS BAR
   ============================================================ */
.stats-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
  padding: 1.2rem 1.5rem;
  background: var(--masthead-background-color, #f8f9fa);
  border-radius: 10px;
  border: 1px solid var(--border-color, #e8e8e8);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.stat-number {
  font-size: 1.7em;
  font-weight: 800;
  line-height: 1;
  color: var(--link-color, #2196F3);
}

.stat-label {
  font-size: 0.75em;
  color: var(--muted-text-color, #777);
  text-align: center;
  margin-top: 0.2rem;
  font-weight: 500;
}

/* ============================================================
   TABS
   ============================================================ */
.tabs-section {
  margin-bottom: 3rem;
}

.tabs-section h2 {
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid var(--border-color, #e0e0e0);
  padding-bottom: 0.5rem;
}

.tab-nav {
  display: flex;
  gap: 0;
  border-bottom: 2px solid var(--border-color, #e0e0e0);
  margin-bottom: 1.5rem;
}

.tab-btn {
  background: none;
  border: none;
  padding: 0.65em 1.4em;
  font-size: 0.95em;
  font-weight: 600;
  cursor: pointer;
  color: var(--muted-text-color, #777);
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s, border-color 0.2s;
  letter-spacing: 0.02em;
}

.tab-btn:hover {
  color: var(--link-color, #2196F3);
}

.tab-btn.active {
  color: var(--link-color, #2196F3);
  border-bottom-color: var(--link-color, #2196F3);
}

.tab-panel {
  display: none;
  animation: fadeIn 0.25s ease;
}

.tab-panel.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ============================================================
   EXPERIENCE TIMELINE
   ============================================================ */
.timeline {
  position: relative;
  padding-left: 1.6rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--border-color, #e0e0e0);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding: 1.2rem 1.3rem;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 10px;
  background: var(--background-color, #fff);
  transition: box-shadow 0.2s, transform 0.2s;
}

.timeline-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateX(3px);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.97rem;
  top: 1.3rem;
  width: 10px;
  height: 10px;
  background: var(--link-color, #2196F3);
  border-radius: 50%;
  border: 2px solid var(--background-color, #fff);
  box-shadow: 0 0 0 2px var(--link-color, #2196F3);
}

.timeline-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.3rem;
}

.timeline-org {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.org-logo-placeholder {
  width: 36px;
  height: 36px;
  background: var(--masthead-background-color, #f0f4ff);
  border: 1px solid var(--border-color, #dde);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65em;
  font-weight: 700;
  color: var(--link-color, #2196F3);
  flex-shrink: 0;
  letter-spacing: 0;
}
.org-logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid var(--border-color, #dde);
  background: #fff;
  flex-shrink: 0;
  padding: 3px;
}

.timeline-title {
  font-size: 1.0em;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

.timeline-subtitle {
  font-size: 0.85em;
  color: var(--muted-text-color, #777);
  margin: 0;
}

.timeline-badge {
  display: inline-block;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 12px;
  padding: 0.2em 0.7em;
  font-size: 0.72em;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
}

.timeline-period {
  font-size: 0.82em;
  color: var(--muted-text-color, #777);
  margin: 0.3rem 0 0.6rem 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.timeline-bullets {
  margin: 0;
  padding-left: 1.3em;
  font-size: 0.9em;
  line-height: 1.65;
  color: var(--text-color, #494e52);
}

.timeline-bullets li {
  margin-bottom: 0.2rem;
}

/* ============================================================
   EDUCATION GRID
   ============================================================ */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.1rem;
}

.edu-card {
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 10px;
  background: var(--background-color, #fff);
  transition: box-shadow 0.2s, transform 0.2s;
}

.edu-card:hover {
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.edu-card-icon {
  font-size: 1.6em;
  margin-bottom: 0.5rem;
}

.edu-card-institution {
  font-weight: 700;
  font-size: 1.0em;
  margin-bottom: 0.15rem;
}

.edu-card-degree {
  font-size: 0.85em;
  color: var(--muted-text-color, #777);
  margin-bottom: 0.3rem;
}

.edu-card-meta {
  font-size: 0.8em;
  color: var(--muted-text-color, #888);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.edu-highlight {
  display: inline-block;
  background: var(--masthead-background-color, #f0f4ff);
  color: var(--link-color, #2196F3);
  border-radius: 4px;
  padding: 0.1em 0.45em;
  font-weight: 600;
  font-size: 0.85em;
}

/* ============================================================
   FEATURED WRITINGS
   ============================================================ */
.featured-section {
  margin-bottom: 2.5rem;
}

.featured-section h2 {
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid var(--border-color, #e0e0e0);
  padding-bottom: 0.5rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.1rem;
  margin-bottom: 1.2rem;
}

.featured-card {
  position: relative;
  padding: 1.2rem 1.2rem 1.4rem 1.2rem;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 10px;
  background: var(--background-color, #fff);
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.featured-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transform: translateY(-3px);
}

.featured-badge {
  display: inline-block;
  background: #fff3e0;
  color: #e65100;
  border-radius: 4px;
  padding: 0.15em 0.55em;
  font-size: 0.72em;
  font-weight: 700;
  width: fit-content;
}

.featured-card-title {
  font-weight: 700;
  font-size: 0.95em;
  line-height: 1.4;
  margin: 0;
}

.featured-card-title a {
  text-decoration: none;
  color: var(--text-color, #494e52);
}

.featured-card-title a:hover {
  color: var(--link-color, #2196F3);
}

.featured-card-highlight {
  font-size: 0.8em;
  color: var(--muted-text-color, #777);
  font-style: italic;
}

.featured-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: auto;
}

.f-tag {
  background: var(--masthead-background-color, #f0f4ff);
  color: var(--link-color, #3f51b5);
  border-radius: 4px;
  padding: 0.12em 0.45em;
  font-size: 0.7em;
  font-weight: 500;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 600px) {
  .hero-greeting { font-size: 1.7em; }
  .hero-typed-wrapper { font-size: 1.0em; }
  .stats-bar { gap: 0.8rem; padding: 1rem; }
  .stat-number { font-size: 1.35em; }
  .timeline { padding-left: 1.2rem; }
  .tab-btn { padding: 0.5em 0.8em; font-size: 0.87em; }
}
</style>

<!-- ============================================================
     HERO
     ============================================================ -->
<div class="hero-section">
  <h1 class="hero-greeting">Hi, I'm <span style="color: var(--link-color, #2196F3);">Ankan Ghosh</span></h1>
  <div class="hero-typed-wrapper">
    <span id="typed-text"></span><span class="typed-cursor"></span>
  </div>
  <p class="hero-bio">
    I build production-grade computer vision and ML systems — from medical image segmentation and OCR pipelines to LLM workflows and multi-modal models. Currently leading vision projects at <strong>AIVAR (AWS Partner)</strong>; previously Senior CV Engineer at <strong>OpenCV</strong>. I also write in-depth technical articles at <strong>LearnOpenCV</strong>, reaching thousands of engineers worldwide.
  </p>
  <div class="hero-cta">
    <a href="/cv/" class="cta-primary">View CV</a>
    <a href="/writings/" class="cta-secondary">Read Writings</a>
    <a href="https://scholar.google.com/citations?user=2wYGQJkAAAAJ&hl=en" target="_blank" rel="noopener" class="cta-secondary">Google Scholar</a>
  </div>
</div>

<!-- ============================================================
     STATS BAR
     ============================================================ -->
<div class="stats-bar">
  <div class="stat-item">
    <span class="stat-number">26+</span>
    <span class="stat-label">Articles Published</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">2</span>
    <span class="stat-label">Years at OpenCV</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">3</span>
    <span class="stat-label">Deployed Projects</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">20+</span>
    <span class="stat-label">CV / LLM Apps Built</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">9.2</span>
    <span class="stat-label">CGPA (B.S. IT/AI)</span>
  </div>
</div>

<!-- ============================================================
     EXPERIENCE / EDUCATION TABS
     ============================================================ -->
<div class="tabs-section">
  <div class="tab-nav">
    <button class="tab-btn active" data-tab="experience">Experience</button>
    <button class="tab-btn" data-tab="education">Education</button>
  </div>

  <!-- EXPERIENCE -->
  <div class="tab-panel active" id="tab-experience">
    <div class="timeline">

      <div class="timeline-item">
        <div class="timeline-header">
          <div class="timeline-org">
            <img src="/images/logo-aivar.png" alt="AIVAR" class="org-logo-img" />
            <div>
              <p class="timeline-title">Senior Machine Learning Engineer</p>
              <p class="timeline-subtitle">AIVAR &mdash; AWS Partner</p>
            </div>
          </div>
          <span class="timeline-badge">Current</span>
        </div>
        <p class="timeline-period">&#128197; Sept 2025 &ndash; Present &nbsp;|&nbsp; &#128205; Bengaluru, India</p>
        <ul class="timeline-bullets">
          <li>Leading all Vision projects, managing teams of 20+ Engineers.</li>
          <li>Delivered 3 projects: Medical image segmentation, Civil tile detection, Finance OCR &amp; RAG pipeline — on AWS (SageMaker, ECS, Batch, S3, DynamoDB, SQS, CloudWatch).</li>
          <li>Architecting solutions for clients including Swiggy, Licious, Zepto, and LendenClub.</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <div class="timeline-org">
            <img src="/images/logo-opencv.png" alt="OpenCV" class="org-logo-img" />
            <div>
              <p class="timeline-title">Senior Computer Vision Engineer</p>
              <p class="timeline-subtitle">OpenCV</p>
            </div>
          </div>
        </div>
        <p class="timeline-period">&#128197; Oct 2023 &ndash; Aug 2025 &nbsp;|&nbsp; &#128205; Bengaluru, India</p>
        <ul class="timeline-bullets">
          <li>Led R&amp;D at OpenCV University; architected solutions from PoC to production — CNNs, YOLO11, SAM2, ViT, DETR, SDXL, NeRF, 3DGS, VLMs, PEFT, RLHF, SFT, LoRA, MCP, ADK.</li>
          <li>Engineered LLM workflow with 82.5% accuracy for sales call analysis using HuggingFace, OpenAI, FastAPI, WhisperX, deployed on AWS (EC2, S3, RDS).</li>
          <li>Built OpenCV Demo Website; developed 20+ Computer Vision and LLM applications.</li>
          <li>Mentored junior engineers; assisted marketing &amp; sales; led the blog team.</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <div class="timeline-org">
            <img src="/images/logo-iit-roorkee.png" alt="IIT Roorkee" class="org-logo-img" />
            <div>
              <p class="timeline-title">Computer Vision Intern</p>
              <p class="timeline-subtitle">IIT Gandhinagar</p>
            </div>
          </div>
        </div>
        <p class="timeline-period">&#128197; Sep 2022 &ndash; Feb 2023 &nbsp;|&nbsp; &#128205; Gandhinagar, India</p>
        <ul class="timeline-bullets">
          <li>Implemented Depth Estimation on OAK-D camera and deployed on Jetson Nano.</li>
          <li>Contribution led to the startup being selected for the META XR Program.</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- EDUCATION -->
  <div class="tab-panel" id="tab-education">
    <div class="education-grid">

      <div class="edu-card">
        <div class="edu-card-icon">&#127979;</div>
        <div class="edu-card-institution">MAKAUT</div>
        <div class="edu-card-degree">B.S. in Information Technology (AI)</div>
        <div class="edu-card-meta">
          2020 &ndash; 2023 &nbsp;&bull;&nbsp; Kolkata, India
        </div>
        <div class="edu-card-meta" style="margin-top:0.3rem;">
          <span class="edu-highlight">CGPA 9.2 / 10</span>
        </div>
      </div>

      <div class="edu-card">
        <div class="edu-card-icon"><img src="/images/logo-iit-roorkee.png" alt="IIT Roorkee" style="width:36px;height:36px;object-fit:contain;" /></div>
        <div class="edu-card-institution">IIT Roorkee</div>
        <div class="edu-card-degree">Deep Learning &amp; Artificial Intelligence</div>
        <div class="edu-card-meta">Sep &ndash; Feb 2021 &nbsp;&bull;&nbsp; Roorkee, India</div>
      </div>

      <div class="edu-card">
        <div class="edu-card-icon">&#127891;</div>
        <div class="edu-card-institution">Bolpur NNB High School</div>
        <div class="edu-card-degree">10+2 Science</div>
        <div class="edu-card-meta">
          May 2019 &nbsp;&bull;&nbsp; Kolkata, India
        </div>
        <div class="edu-card-meta" style="margin-top:0.3rem;">
          <span class="edu-highlight">10+2: 82%</span>&nbsp;&nbsp;<span class="edu-highlight">10th: 88%</span>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ============================================================
     FEATURED WRITINGS
     ============================================================ -->
<div class="featured-section">
  <h2>Featured Writings</h2>
  <div class="featured-grid">

    <div class="featured-card">
      <span class="featured-badge">200+ LinkedIn likes</span>
      <p class="featured-card-title">
        <a href="https://learnopencv.com/finetuning-sam2/" target="_blank" rel="noopener">
          FineTuning SAM2 for Leaf Disease Segmentation
        </a>
      </p>
      <p class="featured-card-highlight">Step-by-step fine-tuning guide; 74% IoU on custom dataset.</p>
      <div class="featured-card-tags">
        <span class="f-tag">SAM2</span><span class="f-tag">Segmentation</span><span class="f-tag">Fine-tuning</span>
      </div>
    </div>

    <div class="featured-card">
      <span class="featured-badge">Cited by 2 papers · Shared by Ultralytics</span>
      <p class="featured-card-title">
        <a href="https://learnopencv.com/yolo11/" target="_blank" rel="noopener">
          YOLO11: Redefining Real-Time Object Detection
        </a>
      </p>
      <p class="featured-card-highlight">First in-depth coverage of YOLO11 architecture and benchmarks.</p>
      <div class="featured-card-tags">
        <span class="f-tag">YOLO11</span><span class="f-tag">Object Detection</span>
      </div>
    </div>

    <div class="featured-card">
      <span class="featured-badge">Dubai Expo feature</span>
      <p class="featured-card-title">
        <a href="https://learnopencv.com/finetuning-retinanet-for-wildlife-detection/" target="_blank" rel="noopener">
          FineTuning RetinaNet for Wildlife Detection with PyTorch
        </a>
      </p>
      <p class="featured-card-highlight">79% accuracy on wildlife detection with step-by-step tutorial.</p>
      <div class="featured-card-tags">
        <span class="f-tag">RetinaNet</span><span class="f-tag">PyTorch</span><span class="f-tag">Fine-tuning</span>
      </div>
    </div>

    <div class="featured-card">
      <span class="featured-badge">Offer from Liquid Trees, SF</span>
      <p class="featured-card-title">
        <a href="https://learnopencv.com/yolov8-object-tracking-and-counting-with-opencv/" target="_blank" rel="noopener">
          YOLOv8 Object Tracking and Counting with OpenCV
        </a>
      </p>
      <p class="featured-card-highlight">Comprehensive guide with practical implementations for production.</p>
      <div class="featured-card-tags">
        <span class="f-tag">YOLOv8</span><span class="f-tag">Object Tracking</span><span class="f-tag">OpenCV</span>
      </div>
    </div>

  </div>
  <a href="/writings/" class="btn btn--primary">View All 26 Articles →</a>
</div>

<!-- ============================================================
     TYPED TEXT JS
     ============================================================ -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  var roles = [
    'Senior ML Engineer',
    'Computer Vision Researcher',
    'Technical Writer @ LearnOpenCV',
    'Generative AI Builder'
  ];
  var el = document.getElementById('typed-text');

  if (el) {
    var roleIdx = 0, charIdx = 0, deleting = false;

    function type() {
      var current = roles[roleIdx];
      if (deleting) {
        el.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        el.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }
      var delay = deleting ? 40 : 80;
      if (!deleting && charIdx === current.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 300;
      }
      setTimeout(type, delay);
    }

    setTimeout(type, 400);
  }

  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.getAttribute('data-tab');
      tabBtns.forEach(function(b) { b.classList.remove('active'); });
      tabPanels.forEach(function(p) { p.classList.remove('active'); });
      btn.classList.add('active');
      var panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
});
</script>
