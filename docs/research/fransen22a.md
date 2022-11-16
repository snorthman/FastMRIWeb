---
pageClass: research
title: Fransen_22_artificial_reader
---
# Diagnostic AI to speed up MRI protocols by identifying redundant sequences: are all diffusion-weighted prostate MRI sequences necessary?
## 📖 Abstract
*Purpose*: To explore if an expert-level diagnostic AI can help speed up MRI by identifying redundant sequences in diffusion-weighted imaging (DWI) for the diagnostic detection of clinically significant prostate cancer (csPCa).


*Materials and Methods*: Existing deep learning AI architectures detects csPCa based on bpMRI at expert-level. We developed a method in which this AI assesses the added diagnostic value of a sequence. This retrospective study included 840 patients with a bi-parametric prostate MRI (bpMRI) for initial detection of csPCa. The bmMRI comprises a T2-weighted image and DWI with b-values of 50, 400, and 800 s/mm² on a 3T scanner (Skyra and Prima). Our method entails computing ADC and b1400 maps based on different DWI combinations: 1) b800 excluded, 2) b400 excluded, 3) complete set. AI models for the various bpMRI combination were trained 5-fold and statistically compared with receiver operating curve (ROC) analysis at patient and lesion level using respectively the DeLong’s and permutation test.

*Results*: The mean area under the ROC of the three combinations were respectively 0.78 +-0.027 (SD), 0.76 +-0.051, and 0.77 +- 0.057. The partial area under of the free ROC between 0.1 and 2.5 false positives lesions per patient was respectively 1.44 +- 0.22, 1.58 +- 0.18 and 1.50 +- 0.12. The slight difference in diagnostic performance (patient-level 0.01, lesion-level 0.06 ) when omitting sequence DWI b800 is not significant (respectively p = 0.2 and p = 0.43).

*Conclusion*: We conclude that expert-level AI can identify redundant sequences in MRI. Furthermore, our method provides evidence that in DWI for csPCa detection, the b800 series can be omitted from the regular bpMRI protocol decreasing total MRI scan time by 33%. These results can provide significant speed-up of any MRI.

*Clinical Relevance*: An increasing demand for MRI scans puts pressure on reducing scan time without losing diagnostic quality. We have developed an AI-assisted system that can spot redundant MRI sequences. This can provide a breakthrough in AI for the clinical assessment of MRI protocols and provide a solution to meet the increasing demand for MRI scans.

## 📚 Citation
S.J. Fransen, C. Roest, Q.Y. van Lohuizen, J.S. Bosma, T.C. Kwee, D. Yakar and H. Huisman (2022), _"Diagnostic AI to speed up MRI protocols by identifying redundant sequences: are all diffusion-weighted prostate MRI sequences necessary?"_, Annual Meeting of the Radiological Society of North America, 2022.
