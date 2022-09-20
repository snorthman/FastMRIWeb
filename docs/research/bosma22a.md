---
pageClass: research
title: Bosma22semi
---
# Semi-supervised learning with report-guided lesion annotation for deep learning-based prostate cancer detection in bpMRI
## 📖 Abstract
Deep learning-based performance increases with more annotated data, but large-scale manual annotation is expensive and labour-intensive. Experts interpret diagnostic images in clinical routine and write their findings in reports. Leveraging unlabelled examinations paired with clinical reports could overcome the manual annotation bottleneck. We hypothesise that detection models can be trained semi-supervised with annotations generated using model predictions, guided by sparse information from clinical reports. We developed a semi-supervised training method for clinically significant prostate cancer (csPCa) detection in biparametric MRI (bpMRI). We included 7,756 prostate MRI examinations and evaluated csPCa detection performance on 300 examinations from an external centre with histopathology-confirmed ground truth. Semi-supervised training with 3,050 manually-annotated examinations improved case-based diagnostic area under the receiver operating characteristic curve (AUROC) from 87.2 ± 0.8% to 89.4 ± 1.0% (P < 10−4) and lesion-based sensitivity at one false positive per case from 76.4 ± 3.8% to 83.6 ± 2.3% (P < 10−4). Semi-supervised training with 169 manually-annotated examinations matched case-based performance of supervised training with 14× fewer annotations. Semi-supervised training with 431 manually-annotated examinations matched lesion-based performance of supervised training with 6× fewer annotations. Our method allows detection AI development with significantly fewer manual annotations. 

## 🤖 Algorithm
The algorithm predicts a heatmap for the likelihood of clinically significant prostate cancer (csPCa) using biparametric MRI (bpMRI). The algorithm ensembles fifteen independent models that were trained jointly on manually and report-guided automatically annotated MRI examinations. 
<ActionButton action="Algorithm" link="https://grand-challenge.org/algorithms/bpmri-cspca-detection-report-guided-annotations/" />

## 💻 Code
Source code for generating Report-Guided Annotations is publicly available.
<ActionButton action="Source" link="www.github.com/DIAGNijmegen/Report-Guided-Annotation" />

## 📚 Citation
If you use our method or algorithm in your work, please cite our work:

J. S. Bosma, A. Saha, M. Hosseinzadeh, I. Slootweg, M. de Rooij, H. Huisman (2021), _"Semi-supervised learning with report-guided lesion annotation for deep learning-based prostate cancer detection in bpMRI"_, to be submitted