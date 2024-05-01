---
pageClass: research
title: S. J. Fransen, et al. (2024b)
---
# A multi-center validation of Prediction Uncertainty to select patients for prostate cancer AI diagnosis

## 📚 Citation
S.J. Fransen, J.S. Bosma, Q.Y. van Lohuizen, C. Roest, F.F.J. Simonis, J. Fütterer, T.C. Kwee, D. Yakar, H. Huisman, "A multi-center validation of Prediction Uncertainty to select patients for prostate cancer AI diagnosis", Annual Meeting of the European Society of Radiology, 2024.

## 📖 Abstract
*Purpose*: 
Prostate cancer (PCa) is the fifth leading cause of death worldwide [1]. MRI offers an accurate and cost-efficient method to detect prostate cancer [2, 3]. Although the MRI pathway has demonstrated detection value, the increase in demand for MRI scans presents a key challenge to the workload of radiologists.

Artificial intelligence (AI) is a promising method to reduce radiologists' workload, as evidenced by recent studies. In mammography screening, a novel AI assistance has been studied wherein cases are identified for autonomous AI assessment [4, 5]. This method is based on triaging patients to autonomous AI or radiologist assessment based on an uncertainty score reflecting the certainty of the AI prediction (e.g., very certain AI predictions receive AI assessment, and uncertain AI predictions are referred to the radiologists' worklists) [6]. AI assistance based on uncertainty triaging might also provide efficiency gains in the current PCa detection pathway.

This study explores optimizing the detection pathway using AI-supported PCa detection for autonomous assessment


*Materials and Methods*: 
A multi-center dataset of patients undergoing MRI assessment for clinically significant (cs)PCa detection was included. Histopathology provided the reference standard (ISUP ≥ 2) for suspicious cases with PI-RADS ≥ 3, and PI-RADS ≤ 2 cases were deemed negative.

A patient suspicious of prostate cancer receives MRI triaging before biopsy. In the current diagnostic pathway, the MRI scan is assessed by a radiologist for abnormalities regarding csPCa. In the proposed AI-supported pathway, MRI scans are first assessed by a detection AI. Cases with a certain prediction receive AI reading, and cases with an uncertain prediction are referred to the radiologist worklist. The uncertainty is quantified by calculating the variability between different model predictions; a low variability corresponds with a certain prediction, and a high variability corresponds with an uncertain prediction. 

The current diagnostic pathway was compared with the proposed AI-supported pathway in efficiency for diagnosing csPCa. First, the case-level diagnostic accuracy of the AI-supported pathway was calculated with different ratios of autonomously read cases (10%, 20%, up to 100%). The accuracies were calculated at a non-inferiority specificity margin of -0.05 (i.e., a reduced amount of specificity is accepted for increased accuracy in the PCa detection pathway). Next, the configuration with the best diagnostic accuracy was compared to the overall radiologist's accuracy using a permutation test with 1000 permutations. The radiologists' accuracies were calculated by comparing PI-RADS ≥ 4 with biopsy findings. Non-inferiority was concluded if the observed accuracy difference between the AI-assisted and radiologists-only pathway was positive and less than 5% of the sampled cases had an accuracy lower than or equal to the radiologist.

 
*Results*: 
This study included 1612 patients: 689 patients from center A, 723 patients from center B, and 200 patients from center C.

The AI-supported PCa detection pathway provided a more efficient diagnosis compared to the radiologist-only pathway while maintaining a similar accuracy and non-inferior specificity. The efficiency improvement with autonomous AI readings was institute-specific: 70% in center A (70% accuracy in AI-assisted vs. 65% accuracy in radiologists pathway; p = 0.001), 75% in center B (75% accuracy AI-assisted vs. 62% accuracy radiologists pathway; p = 0.001), and 50% in center C (85% accuracy in AI-assisted vs. 83% accuracy in radiologists pathway; p = 0.002). Figure 2 provides an example of a certain and uncertain AI diagnosis.


*Conclusion*: 
The high workload for radiologists as a result of increased demand for prostate MRI could potentially be reduced using AI-supported PCa diagnosis to streamline the diagnostic workflow. This study shows the feasibility of using uncertainty to triage PCa suspicious patients to AI reading or radiologists' assessment. Based on our findings, AI-supported uncertainty-based diagnosis could reduce the radiologist workload by 50% to 75% without losing diagnostic accuracy.

The clinical implication of this study should be approached with caution, as prospective studies are needed to assess the actual radiologists' workload reduction and the performance of AI-assisted diagnosis.

*References*: 
1. Rawla P (2019) Epidemiology of Prostate Cancer. World J Oncol 10:63–89. https://doi.org/10.14740/wjon1191
2. Van der Leest M, Cornel E, Israël B, et al (2019) Head-to-head Comparison of Transrectal Ultrasound-guided Prostate
Biopsy Versus Multiparametric Prostate Resonance Imaging with Subsequent Magnetic Resonance-guided Biopsy in
Biopsy-naïve Men with Elevated Prostate-specific Antigen: A Large Prospective Multicenter Clinical Study(Figure
presented.). Eur Urol 75:570–578. https://doi.org/10.1016/j.eururo.2018.11.023
3. Ahmed HU, El-Shater Bosaily A, Brown LC, et al (2017) Diagnostic accuracy of multi-parametric MRI and TRUS
biopsy in prostate cancer (PROMIS): a paired validating confirmatory study. The Lancet 389:815–822.
https://doi.org/10.1016/S0140-6736(16)32401-1
4. Lauritzen AD, Rodríguez-Ruiz A, von Euler-Chelpin MC, et al (2022) An Artificial Intelligence–based Mammography
Screening Protocol for Breast Cancer: Outcome and Radiologist Workload. Radiology 304:41–49.
https://doi.org/10.1148/radiol.210948
5. Lång K, Josefsson V, Larsson A-M, et al (2023) Artificial intelligence-supported screen reading versus standard
double reading in the Mammography Screening with Artificial Intelligence trial (MASAI): a clinical safety analysis of a
randomised, controlled, non-inferiority, single-blinded, screening accuracy study. Lancet Oncol 24:936–944.
https://doi.org/10.1016/S1470-2045(23)00298-X
6. Alves N, Bosma JS, Venkadesh K V., et al (2023) Prediction Variability to Identify Reduced AI Performance in Cancer
Diagnosis at MRI and CT. Radiology 308:. https://doi.org/10.1148/radiol.230275
