---
pageClass: research
title: J.S. Bosma, et al. (2021)
---
# Augmenting AI with Automated Segmentation of Report Findings Applied to Prostate Cancer Detection in Biparametric MRI

## 📖 Abstract
*Purpose*: To improve risk stratification of clinically significant prostate cancer (csPCa) with a 3D deep learning detection model, by augmenting the largest prostate MRI dataset reported in literature to date. 

*Materials and Methods*: This retrospective study included 6,866 prostate bpMRI studies (axial T2- weighted, high b-value (≥ 1400) and apparent diffusion coefficient scans) from 5,646 consecutive patients, with elevated PSA or clinical suspicion of PCa, between 2014-2020 for training. All studies were evaluated by experienced radiologists during clinical routine. The findings in 2,659 studies were manually segmented. We propose a hybrid framework to augment our detection model with more training data. After training with expert csPCa segmentations, we generate automatic cancer segmentations by masking our model predictions with the number of csPCa lesions automatically extracted from radiology reports. An augmented detection model is then trained jointly on manual and automatically generated csPCa segmentations. Models trained on expert or augmented cancer segmentations are evaluated on 296 visits of 296 consecutive men with elevated PSA or clinical suspicion of prostate cancer from an independent, external, centre. Ground truth is provided by MR-guided and TRUS-guided biopsies, and radical prostatectomy when available. Studies are considered positive if they have at least one Gleason grade group ≥ 2 lesion (csPCa). We trained our models on expert and augmented segmentations with 5-fold cross-validation and 5 restarts. Diagnostic performance was evaluated using the Area under the Receiver Operating Characteristic curve (AUROC). We performed a permutation test to obtain the statistical significance level. 

*Results*: Augmenting the training set with automatic csPCa segmentations guided by report findings, sig- nificantly improves the case-level risk stratification of csPCa. For the external test set, the AUROC increased from 85.7 ± 2.5% to 89.0 ± 1.2% (P < 0.0001). On the external test set, experienced radiologists had a sensitivity of 91.4±2.7% at 78.3±2.4% specificity. At the same sensitivity, adding automatic segmentations improved the model’s specificity from 46.8 ± 12.8% to 62.0 ± 7.1% (P < 0.0001). 

*Conclusion*: Augmenting training with automatic report driven segmentations of prostate cancer in bpMRI significantly improved the risk-stratification of the deep learning prostate cancer detection model. 

*Clinical relevance*: Risk stratification for clinically significant prostate cancer using prostate MRI is in- strumental to reduce over-treatment. Deep learning can assist, but requires expensive expert segmentations.

## 📚 Citation
J.S. Bosma, A. Saha, M. Hosseinzadeh and H. Huisman (2021), _"Augmenting AI with Automated Segmentation of Report Findings Applied to Prostate Cancer Detection in Biparametric MRI"_, Annual Meeting of the Radiological Society of North America, 2021.