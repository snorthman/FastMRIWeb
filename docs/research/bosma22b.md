---
pageClass: research
title: Bosma22performant
---
# Performant and Reproducible Deep Learning-Based Cancer Detection Models for Medical Imaging
## 📖 Abstract
*Purpose*: Investigate optimal loss functions for deep learning-based cancer detection and risk stratification.

*Materials and Methods*: This retrospective study includes two use cases for deep learning cancer detection: clinically significant prostate cancer (csPCa) detection in bpMRI and pancreatic cancer detection in contrast-enhanced CT scans. Deep learning models were trained with the nnU-Net and nnDetection frameworks to provide transparent and reproducible training setups. We investigated training nnU-Net models with Cross-Entropy (CE), Focal loss (FL), CE+FL, and CE+Dice loss and compared them with nnDetection, which is designed for medical object detection. For csPCa detection, we used 3050 exams with PI-RADS ≥ 4 annotations for training. Trained models were evaluated on 97 Gleason grade group ≥ 2 lesions in 300 exams from an external center. For pancreatic cancer detection, we used 242 exams for training. Trained models were evaluated on 281 histopathology-confirmed lesions in 361 exams from two publicly available, external, datasets. We performed extensive experimentation, with 10 to 20 runs per configuration, totaling about 6000 GPU hours. Diagnostic performance was evaluated using the Area under the Receiver Operating Characteristic curve (AUROC) for case-based risk stratification and Average Precision (AP) for lesion-based detection. A permutation test provided the statistical significance level.

*Results*: For csPCa detection, training nnU-Net with CE+FL loss outperformed the other loss configurations at case-based risk stratification (p < 1e-2) and performed well at lesion-based detection (p ≤ 0.072). nnDetection performed well at lesion-based detection, but its case-based risk stratification was poor. The ensemble of four nnU-Net models, one of each loss configuration, performed on par with the best configuration for each task. For pancreatic cancer detection, no significant performance difference was observed between nnU-Net loss configurations, although the default CE+Dice loss seems worse (p ≤ 0.14). nnDetection failed to reach good performance. The ensemble of four nnU-Net models performed on par with the best configuration at case-based risk stratification and seems to outperform the other configurations at lesion-based detection (p ≤ 0.059).

*Conclusion*: Cancer detection and risk stratification with nnU-Net were superior to nnDetection. The nnU-Net ensemble either outperformed other configurations or performed on par, making it a reliable and reproducible cancer detection method.

*Clinical Relevance*: Risk stratification is instrumental for triage, biopsy planning and reduction of over-treatment. Deep learning can assist, with increasing efficacy as stand-alone performance increases.

## 📚 Citation
J.S. Bosma, N. Alves and H. Huisman (2022), _"Performant and Reproducible Deep Learning-Based Cancer Detection Models for Medical Imaging"_, Annual Meeting of the Radiological Society of North America, 2022.