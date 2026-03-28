---
layout: archive
title: "Resume"
permalink: /resume/
author_profile: true
redirect_from:
  - /cv/
---

{% include base_path %}

<style>
/* ============================================================
   ANIMATIONS
   ============================================================ */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.5); }
  50%       { box-shadow: 0 0 0 5px rgba(22,163,74,0); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* ============================================================
   DOWNLOAD BUTTON
   ============================================================ */
.resume-download-wrap {
  margin-bottom: 2.2rem;
}
.resume-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7em 1.8em;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1em;
  text-decoration: none !important;
  color: #fff !important;
  background: linear-gradient(135deg, var(--global-link-color, #0284c7) 0%, #0ea5e9 50%, #6366f1 100%);
  background-size: 200% auto;
  transition: background-position 0.5s ease, box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 3px 12px rgba(2,132,199,0.25);
}
.resume-download-btn:hover {
  background-position: right center;
  box-shadow: 0 6px 22px rgba(2,132,199,0.38);
  transform: translateY(-2px);
}
.resume-download-btn i {
  font-size: 1.05em;
}

/* ============================================================
   SECTION HEADERS
   ============================================================ */
.resume-section {
  margin-bottom: 2.4rem;
  animation: fadeInUp 0.4s ease both;
}
.resume-section-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.55rem;
  border-bottom: 2px solid var(--global-border-color, #e5e7eb);
}
.resume-section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--global-link-color, #0284c7);
  color: #fff;
  font-size: 0.85em;
  flex-shrink: 0;
}
.resume-section-title {
  font-size: 1.25em;
  font-weight: 800;
  margin: 0;
  color: var(--global-text-color, #111827);
  letter-spacing: -0.02em;
}

/* ============================================================
   EXPERIENCE TIMELINE
   ============================================================ */
.exp-timeline {
  position: relative;
  padding-left: 1.8rem;
}
.exp-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--global-border-color, #e5e7eb);
  border-radius: 2px;
}
.exp-item {
  position: relative;
  margin-bottom: 1.2rem;
}
.exp-item::before {
  content: '';
  position: absolute;
  left: -2.17rem;
  top: 1.1rem;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--global-link-color, #0284c7);
  border: 2.5px solid var(--global-bg-color, #fff);
  box-shadow: 0 0 0 2px var(--global-link-color, #0284c7);
}
.exp-item.current::before {
  background: #16a34a;
  box-shadow: 0 0 0 2px #16a34a;
  animation: pulse-dot 1.8s ease-in-out infinite;
}
.exp-card {
  padding: 1.1rem 1.3rem;
  background: var(--global-card-bg-color, #f8fafc);
  border-left: 3px solid var(--global-link-color, #0284c7);
  border-radius: 0 12px 12px 0;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s, transform 0.2s;
}
.exp-item.current .exp-card {
  border-left-color: #16a34a;
}
.exp-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.09);
  transform: translateX(3px);
}
.exp-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
}
.exp-role {
  font-weight: 700;
  font-size: 1.0em;
  color: var(--global-text-color, #111827);
  margin: 0;
  letter-spacing: -0.01em;
}
.exp-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2em 0.65em;
  border-radius: 20px;
  font-size: 0.71em;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
}
.exp-badge.current-badge {
  background: #dcfce7;
  color: #166534;
}
.exp-badge.past-badge {
  background: var(--global-card-bg-color, #f0f9ff);
  color: var(--global-muted-color, #6b7280);
  border: 1px solid var(--global-border-color, #e5e7eb);
}
.exp-meta {
  font-size: 0.83em;
  color: var(--global-muted-color, #6b7280);
  margin: 0 0 0.7rem 0;
  font-weight: 500;
}
.exp-card ul {
  margin: 0;
  padding-left: 1.2em;
  font-size: 0.9em;
  line-height: 1.7;
  color: var(--global-text-color, #374151);
}
.exp-card ul li {
  margin-bottom: 0.2rem;
}

/* ============================================================
   EDUCATION CARDS
   ============================================================ */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}
.edu-card {
  padding: 1.1rem 1.2rem;
  background: var(--global-card-bg-color, #f8fafc);
  border-top: 3px solid var(--global-link-color, #0284c7);
  border-radius: 0 0 12px 12px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s, transform 0.2s;
}
.edu-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.09);
  transform: translateY(-3px);
}
.edu-card-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.edu-institution {
  font-weight: 700;
  font-size: 1.0em;
  color: var(--global-text-color, #111827);
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.edu-institution i {
  color: var(--global-link-color, #0284c7);
  font-size: 0.9em;
}
.edu-gpa {
  display: inline-block;
  padding: 0.18em 0.6em;
  border-radius: 6px;
  font-size: 0.72em;
  font-weight: 700;
  background: #dcfce7;
  color: #166534;
  white-space: nowrap;
  flex-shrink: 0;
}
.edu-degree {
  font-size: 0.84em;
  color: var(--global-muted-color, #6b7280);
  font-weight: 500;
  margin-bottom: 0.25rem;
}
.edu-dates {
  font-size: 0.77em;
  color: var(--global-muted-color, #9ca3af);
}

/* ============================================================
   PUBLICATIONS
   ============================================================ */
.pub-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.pub-card {
  padding: 1rem 1.2rem;
  background: var(--global-card-bg-color, #f8fafc);
  border-left: 4px solid var(--global-link-color, #0284c7);
  border-radius: 0 10px 10px 0;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s, transform 0.2s;
}
.pub-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.09);
  transform: translateX(3px);
}
.pub-title {
  font-weight: 700;
  font-size: 0.95em;
  color: var(--global-text-color, #111827);
  text-decoration: none;
  transition: color 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  line-height: 1.4;
}
.pub-title:hover {
  color: var(--global-link-color, #0284c7);
}
.pub-title i {
  font-size: 0.8em;
  opacity: 0.7;
}
.pub-venue {
  font-size: 0.81em;
  color: var(--global-muted-color, #6b7280);
  margin: 0.25rem 0 0.5rem 0;
}
.pub-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.pub-chip {
  display: inline-block;
  padding: 0.15em 0.6em;
  border-radius: 20px;
  font-size: 0.7em;
  font-weight: 600;
  background: var(--global-accent-badge-bg, #fff7ed);
  color: var(--global-accent-badge-text, #c2410c);
}

/* ============================================================
   PROJECTS
   ============================================================ */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.1rem 1.2rem 1.2rem 1.2rem;
  background: var(--global-card-bg-color, #f8fafc);
  border-top: 3px solid var(--global-link-color, #0284c7);
  border-radius: 0 0 12px 12px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s, transform 0.2s;
  gap: 0.5rem;
}
.project-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.09);
  transform: translateY(-3px);
}
.project-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}
.project-name {
  font-weight: 700;
  font-size: 1.0em;
  color: var(--global-text-color, #111827);
  margin: 0;
  letter-spacing: -0.01em;
}
.project-views {
  display: inline-block;
  padding: 0.15em 0.55em;
  border-radius: 20px;
  font-size: 0.69em;
  font-weight: 700;
  background: #dbeafe;
  color: #1e40af;
  white-space: nowrap;
  flex-shrink: 0;
}
.project-desc {
  font-size: 0.86em;
  color: var(--global-muted-color, #6b7280);
  line-height: 1.55;
  flex: 1;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.p-tag {
  background: var(--global-card-bg-color, #f0f9ff);
  color: var(--global-link-color, #0284c7);
  border-radius: 4px;
  padding: 0.1em 0.42em;
  font-size: 0.69em;
  font-weight: 500;
}
.project-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}
.proj-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.28em 0.75em;
  border-radius: 6px;
  font-size: 0.76em;
  font-weight: 600;
  text-decoration: none !important;
  transition: opacity 0.15s, transform 0.15s;
}
.proj-link-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}
.proj-link-demo {
  background: var(--global-link-color, #0284c7);
  color: #fff !important;
}
.proj-link-gh {
  background: var(--global-border-color, #e5e7eb);
  color: var(--global-text-color, #374151) !important;
}

/* ============================================================
   TALKS
   ============================================================ */
.talks-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.talks-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.talks-list ul li {
  padding: 0.8rem 1rem;
  background: var(--global-card-bg-color, #f8fafc);
  border-left: 3px solid var(--global-link-color, #0284c7);
  border-radius: 0 8px 8px 0;
  font-size: 0.92em;
  transition: box-shadow 0.2s, transform 0.2s;
}
.talks-list ul li:hover {
  box-shadow: 0 4px 14px rgba(0,0,0,0.07);
  transform: translateX(2px);
}

/* ============================================================
   AWARDS BADGE CLOUD
   ============================================================ */
.awards-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.award-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35em 0.9em;
  border-radius: 20px;
  font-size: 0.82em;
  font-weight: 600;
  background: var(--global-card-bg-color, #f0f9ff);
  color: var(--global-text-color, #374151);
  border: 1px solid var(--global-border-color, #e5e7eb);
  transition: box-shadow 0.18s, transform 0.18s, border-color 0.18s;
}
.award-badge:hover {
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  border-color: var(--global-link-color, #0284c7);
  color: var(--global-link-color, #0284c7);
}
.award-badge i {
  font-size: 0.85em;
  color: #f59e0b;
}
.award-badge.podium i {
  color: #16a34a;
}

/* ============================================================
   TECH STACK PILLS
   ============================================================ */
.stack-groups {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.stack-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
}
.stack-group-label {
  font-size: 0.77em;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.3em 0.8em;
  border-radius: 6px;
  white-space: nowrap;
}
.stack-label-ml  { background: #dbeafe; color: #1e40af; }
.stack-label-llm { background: #ede9fe; color: #5b21b6; }
.stack-label-cloud { background: #fff7ed; color: #c2410c; }
.stack-label-lang { background: #dcfce7; color: #166534; }
.stack-pill {
  display: inline-block;
  padding: 0.28em 0.7em;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 500;
  background: var(--global-card-bg-color, #f8fafc);
  color: var(--global-text-color, #374151);
  border: 1px solid var(--global-border-color, #e5e7eb);
  transition: border-color 0.15s, color 0.15s, transform 0.15s;
}
.stack-pill:hover {
  border-color: var(--global-link-color, #0284c7);
  color: var(--global-link-color, #0284c7);
  transform: translateY(-1px);
}

/* ============================================================
   DARK MODE
   ============================================================ */
html[data-theme="dark"] .exp-badge.current-badge,
html[data-theme="dark"] .edu-gpa {
  background: #14532d;
  color: #86efac;
}
html[data-theme="dark"] .project-views {
  background: #1e3a5f;
  color: #93c5fd;
}
html[data-theme="dark"] .stack-label-ml  { background: #1e3a5f; color: #93c5fd; }
html[data-theme="dark"] .stack-label-llm { background: #2e1065; color: #c4b5fd; }
html[data-theme="dark"] .stack-label-cloud { background: #431407; color: #fdba74; }
html[data-theme="dark"] .stack-label-lang { background: #14532d; color: #86efac; }
html[data-theme="dark"] .pub-chip {
  background: #431407;
  color: #fdba74;
}
</style>

<div class="resume-download-wrap">
  <a href="/files/ankan_ghosh_resume.pdf" class="resume-download-btn" download>
    <i class="fas fa-download"></i> Download PDF Resume
  </a>
</div>

<!-- ============================================================
     EXPERIENCE
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-briefcase"></i></span>
    <h2 class="resume-section-title">Experience</h2>
  </div>

  <div class="exp-timeline">

    <div class="exp-item current">
      <div class="exp-card">
        <div class="exp-card-top">
          <p class="exp-role">Senior Machine Learning Engineer</p>
          <span class="exp-badge current-badge"><i class="fas fa-circle" style="font-size:0.55em"></i> Current</span>
        </div>
        <p class="exp-meta">AIVAR &mdash; AWS Partner &nbsp;&middot;&nbsp; Bengaluru, India &nbsp;&middot;&nbsp; Sept 2025 &ndash; Present</p>
        <ul>
          <li>Leading all Vision projects, managing teams of 20+ Engineers.</li>
          <li>Delivered 3 projects: Medical image segmentation, Civil tile detection &amp; extraction, Finance OCR &amp; RAG pipeline using AWS (SageMaker, ECS, Batch, S3, DynamoDB, SQS, CloudWatch).</li>
          <li>Architecting solutions for clients including Swiggy, Licious, Zepto, and LendenClub.</li>
        </ul>
      </div>
    </div>

    <div class="exp-item">
      <div class="exp-card">
        <div class="exp-card-top">
          <p class="exp-role">Senior Computer Vision Engineer</p>
          <span class="exp-badge past-badge">Oct 2023 &ndash; Aug 2025</span>
        </div>
        <p class="exp-meta">OpenCV &nbsp;&middot;&nbsp; Bengaluru, India</p>
        <ul>
          <li>Led R&amp;D at OpenCV University; architected solutions from PoC to production with latest CV (CNNs, YOLO11, SAM2, ViT, OpenCV, DETR, SDXL, NeRF, 3DGS) and NLP (VLMs, PEFT, RLHF, SFT, LoRA, MCP, ADK).</li>
          <li>Worked on internal CRM OpenCV-SyncX; automated production deployment on AWS (EKS, EC2, Lambda, S3, RDS, DynamoDB).</li>
          <li>Engineered LLM workflow with 82.5% accuracy for sales call analysis using HuggingFace, OpenAI, FastAPI, WhisperX, deployed on AWS.</li>
          <li>Built OpenCV Demo Website; developed 20+ Computer Vision and LLM applications.</li>
          <li>Mentored junior engineers; assisted marketing &amp; sales; led the blog team.</li>
        </ul>
      </div>
    </div>

    <div class="exp-item">
      <div class="exp-card">
        <div class="exp-card-top">
          <p class="exp-role">Computer Vision Intern</p>
          <span class="exp-badge past-badge">Sep 2022 &ndash; Feb 2023</span>
        </div>
        <p class="exp-meta">IIT Gandhinagar &nbsp;&middot;&nbsp; Gandhinagar, India</p>
        <ul>
          <li>Implemented Depth Estimation on OAK-D camera and deployed on Jetson Nano.</li>
          <li>Contribution led to the startup being selected for the META XR Program.</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- ============================================================
     EDUCATION
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-graduation-cap"></i></span>
    <h2 class="resume-section-title">Education</h2>
  </div>

  <div class="edu-grid">

    <div class="edu-card">
      <div class="edu-card-row">
        <div class="edu-institution"><i class="fas fa-university"></i> MAKAUT</div>
        <span class="edu-gpa">CGPA 9.2 / 10</span>
      </div>
      <div class="edu-degree">B.S. in Information Technology (AI)</div>
      <div class="edu-dates">2020 &ndash; 2023 &nbsp;&middot;&nbsp; Kolkata, India</div>
    </div>

    <div class="edu-card">
      <div class="edu-card-row">
        <div class="edu-institution"><i class="fas fa-university"></i> IIT Roorkee</div>
      </div>
      <div class="edu-degree">Deep Learning &amp; Artificial Intelligence</div>
      <div class="edu-dates">Sep &ndash; Feb 2021 &nbsp;&middot;&nbsp; Roorkee, India</div>
    </div>

    <div class="edu-card">
      <div class="edu-card-row">
        <div class="edu-institution"><i class="fas fa-school"></i> Bolpur NNB High School</div>
      </div>
      <div class="edu-degree">10+2: 82% &nbsp;&middot;&nbsp; 10th: 88%</div>
      <div class="edu-dates">May 2019 &nbsp;&middot;&nbsp; Kolkata, India</div>
    </div>

  </div>
</div>

<!-- ============================================================
     TALKS & WORKSHOPS
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-microphone-lines"></i></span>
    <h2 class="resume-section-title">Talks &amp; Workshops</h2>
  </div>
  <div class="talks-list">
    <ul>{% for post in site.talks reversed %}
      {% include archive-single-talk-cv.html %}
    {% endfor %}</ul>
  </div>
</div>

<!-- ============================================================
     NOTABLE PUBLICATIONS
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-book-open"></i></span>
    <h2 class="resume-section-title">Notable Publications</h2>
  </div>

  <div class="pub-list">

    <div class="pub-card">
      <a class="pub-title" href="https://learnopencv.com/finetuning-sam2/" target="_blank" rel="noopener">
        FineTuning SAM2 for Leaf Disease Segmentation <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
      <div class="pub-venue">LearnOpenCV &nbsp;&middot;&nbsp; Feb 2025</div>
      <div class="pub-chips">
        <span class="pub-chip">200+ LinkedIn likes</span>
        <span class="pub-chip">74% IoU achieved</span>
      </div>
    </div>

    <div class="pub-card">
      <a class="pub-title" href="https://learnopencv.com/yolo11/" target="_blank" rel="noopener">
        YOLO11: Redefining Real-Time Object Detection <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
      <div class="pub-venue">LearnOpenCV &nbsp;&middot;&nbsp; Oct 2024</div>
      <div class="pub-chips">
        <span class="pub-chip">Cited by 2 papers</span>
        <span class="pub-chip">Shared by Ultralytics</span>
      </div>
    </div>

    <div class="pub-card">
      <a class="pub-title" href="https://learnopencv.com/finetuning-retinanet-for-wildlife-detection/" target="_blank" rel="noopener">
        FineTuning RetinaNet for Wildlife Detection with PyTorch <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
      <div class="pub-venue">LearnOpenCV &nbsp;&middot;&nbsp; Mar 2025</div>
      <div class="pub-chips">
        <span class="pub-chip">Featured at Dubai Expo</span>
        <span class="pub-chip">79% accuracy</span>
      </div>
    </div>

    <div class="pub-card">
      <a class="pub-title" href="https://learnopencv.com/yolov8-object-tracking-and-counting-with-opencv/" target="_blank" rel="noopener">
        YOLOv8 Object Tracking and Counting with OpenCV <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
      <div class="pub-venue">LearnOpenCV &nbsp;&middot;&nbsp; Jan 2024</div>
      <div class="pub-chips">
        <span class="pub-chip">Led to SF job offer</span>
      </div>
    </div>

  </div>

  <p style="margin-top:1rem; font-size:0.9em;"><a href="/writings/">View all 26 articles &rarr;</a></p>
</div>

<!-- ============================================================
     PERSONAL PROJECTS
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-rocket"></i></span>
    <h2 class="resume-section-title">Personal Projects</h2>
  </div>

  <div class="project-grid">

    <div class="project-card">
      <div class="project-card-top">
        <p class="project-name">PixelFusion</p>
        <span class="project-views">16.5k views</span>
      </div>
      <div class="project-desc">Gradio demo for Artistic Neural Style Transfer.</div>
      <div class="project-tags">
        <span class="p-tag">Python</span><span class="p-tag">TensorFlow</span><span class="p-tag">Gradio</span><span class="p-tag">HuggingFace</span>
      </div>
      <div class="project-links">
        <a href="https://huggingface.co/spaces/ankanpy/pixelfusion" class="proj-link-btn proj-link-demo" target="_blank" rel="noopener"><i class="fas fa-play"></i> Live Demo</a>
        <a href="https://github.com/ankanpy/pixelfusion" class="proj-link-btn proj-link-gh" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-top">
        <p class="project-name">SegMagine</p>
        <span class="project-views">21k views</span>
      </div>
      <div class="project-desc">Gradio demo for Segment Anything Model (SAM) by Meta.</div>
      <div class="project-tags">
        <span class="p-tag">Python</span><span class="p-tag">PyTorch</span><span class="p-tag">Gradio</span><span class="p-tag">HuggingFace</span>
      </div>
      <div class="project-links">
        <a href="https://huggingface.co/spaces/ankanpy/segmagine" class="proj-link-btn proj-link-demo" target="_blank" rel="noopener"><i class="fas fa-play"></i> Live Demo</a>
        <a href="https://github.com/ankanpy/segmagine" class="proj-link-btn proj-link-gh" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-top">
        <p class="project-name">DocuMind</p>
        <span class="project-views">2k views</span>
      </div>
      <div class="project-desc">End-to-End RAG application for document analysis.</div>
      <div class="project-tags">
        <span class="p-tag">Llama</span><span class="p-tag">LangChain</span><span class="p-tag">Weaviate</span><span class="p-tag">Qdrant</span>
      </div>
      <div class="project-links">
        <a href="https://huggingface.co/spaces/ankanpy/documind" class="proj-link-btn proj-link-demo" target="_blank" rel="noopener"><i class="fas fa-play"></i> Live Demo</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-top">
        <p class="project-name">MedGemma Medical Image Analysis</p>
      </div>
      <div class="project-desc">Medical QnA and report generation using MedGemma.</div>
      <div class="project-tags">
        <span class="p-tag">Gemma3</span><span class="p-tag">PyTorch</span><span class="p-tag">Transformers</span><span class="p-tag">Gradio</span>
      </div>
      <div class="project-links">
        <a href="https://huggingface.co/spaces/ankanpy/medgemma-medical" class="proj-link-btn proj-link-demo" target="_blank" rel="noopener"><i class="fas fa-play"></i> Live Demo</a>
      </div>
    </div>

  </div>
</div>

<!-- ============================================================
     AWARDS & CERTIFICATIONS
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-trophy"></i></span>
    <h2 class="resume-section-title">Awards &amp; Certifications</h2>
  </div>

  <div class="awards-cloud">
    <span class="award-badge podium"><i class="fas fa-medal"></i> SIH22 Finalist</span>
    <span class="award-badge podium"><i class="fas fa-medal"></i> Hack4Bengal &mdash; 2nd Place</span>
    <span class="award-badge podium"><i class="fas fa-medal"></i> Amazon ML Challenge &mdash; 47th</span>
    <span class="award-badge"><i class="fas fa-certificate"></i> Deep Learning Specialization</span>
    <span class="award-badge"><i class="fas fa-certificate"></i> Mastering OpenCV with Python</span>
    <span class="award-badge"><i class="fas fa-certificate"></i> AI for Everyone: Master the Basics</span>
    <span class="award-badge"><i class="fas fa-code"></i> GSSoC 2022 Contributor</span>
    <span class="award-badge"><i class="fas fa-star"></i> NVIDIA AI Summit 2024</span>
    <span class="award-badge"><i class="fas fa-star"></i> CCD 2023</span>
    <span class="award-badge"><i class="fas fa-star"></i> PyCon India 2023</span>
    <span class="award-badge"><i class="fas fa-star"></i> Google I/O Extended</span>
  </div>
</div>

<!-- ============================================================
     TECH STACK
     ============================================================ -->
<div class="resume-section">
  <div class="resume-section-header">
    <span class="resume-section-icon"><i class="fas fa-layer-group"></i></span>
    <h2 class="resume-section-title">Tech Stack</h2>
  </div>

  <div class="stack-groups">

    <div class="stack-group">
      <span class="stack-group-label stack-label-ml">ML &amp; CV</span>
      <span class="stack-pill">PyTorch</span>
      <span class="stack-pill">OpenCV</span>
      <span class="stack-pill">YOLO11</span>
      <span class="stack-pill">SAM2</span>
      <span class="stack-pill">ViT</span>
      <span class="stack-pill">DETR</span>
      <span class="stack-pill">NeRF</span>
      <span class="stack-pill">3DGS</span>
      <span class="stack-pill">TensorRT</span>
      <span class="stack-pill">JAX</span>
      <span class="stack-pill">Keras</span>
    </div>

    <div class="stack-group">
      <span class="stack-group-label stack-label-llm">LLM &amp; GenAI</span>
      <span class="stack-pill">VLMs</span>
      <span class="stack-pill">PEFT</span>
      <span class="stack-pill">RLHF</span>
      <span class="stack-pill">SFT</span>
      <span class="stack-pill">LoRA</span>
      <span class="stack-pill">LangChain</span>
      <span class="stack-pill">LlamaIndex</span>
      <span class="stack-pill">vLLM</span>
      <span class="stack-pill">Ollama</span>
      <span class="stack-pill">RAG</span>
      <span class="stack-pill">HuggingFace</span>
      <span class="stack-pill">Diffusers</span>
      <span class="stack-pill">TRL</span>
    </div>

    <div class="stack-group">
      <span class="stack-group-label stack-label-cloud">Cloud &amp; DevOps</span>
      <span class="stack-pill">AWS</span>
      <span class="stack-pill">GCP</span>
      <span class="stack-pill">Docker</span>
      <span class="stack-pill">Kubernetes</span>
      <span class="stack-pill">SageMaker</span>
      <span class="stack-pill">EKS</span>
      <span class="stack-pill">EC2</span>
      <span class="stack-pill">Lambda</span>
      <span class="stack-pill">S3</span>
      <span class="stack-pill">RDS</span>
      <span class="stack-pill">DynamoDB</span>
    </div>

    <div class="stack-group">
      <span class="stack-group-label stack-label-lang">Languages &amp; Frameworks</span>
      <span class="stack-pill">Python</span>
      <span class="stack-pill">C++</span>
      <span class="stack-pill">FastAPI</span>
      <span class="stack-pill">Gradio</span>
      <span class="stack-pill">Streamlit</span>
      <span class="stack-pill">Git</span>
    </div>

  </div>
</div>
