---
pageClass: research
title: Q. Y. van Lohuizen, et al. (2023)
---
# Faster MRI Acquisition: the Relationship between Visual and Diagnostic Quality in Prostate MRI Reconstruction

## 📚 Citation
Q. Y. van Lohuizen, C. Roest, F. F. J. Simonis, S. J. Fransen, T. C. Kwee, D. Yakar, and H. Huisman, "Faster MRI Acquisition: the Relationship between Visual and Diagnostic Quality in Prostate MRI Reconstruction", _Annual Meeting of the European Society of Radiology_, 2023.

## 🏆 Award
"We would like to wholeheartedly congratulate you that the ECR 2023 Scientific Subcommittee has selected you as the award winner within the topic "Imaging Informatics / Artificial Intelligence and Machine Learning" in merit of your research presentation abstract entitled "Faster MRI acquisition: the relationship between visual and diagnostic quality in prostate MRI reconstruction"."
_- ECR Abstract Team, Scientific Programme Department_

## 📖 Abstract
*Purpose*: Studies showed that AI reconstruction of accelerated MRI improves visual quality, but it is unclear whether this improves diagnostic value. We investigated a novel framework for accelerated MRI by assessing reconstruction quality (naïve- vs AI-reconstructed) by comparing diagnostic performance and visual similarity as an outcome for prostate cancer detection.

*Methods*: A retrospective multi-site study was performed on a cohort of 1535 patients who underwent bi-parametric prostate MRI between 2016-2020. An expert radiologist delineated all clinically significant prostate cancer (csPCa) lesions (PI-RADS ≥ 4). T2W scans were retrospectively undersampled in k-space, simulating four (R4) and eight (R8) times acceleration. A 3D U-Net was used to reconstruct undersampled images. The resulting images were fed to an existing state-of-the-art csPCa detection AI to evaluate the effect of AI reconstruction on diagnosis. Visual image quality (SSIM) was compared with a Wilcoxon test. Lesion level diagnostics were evaluated by comparing the partial area-under-the-FROC-curve over the false positive interval 0.1-2.5 (pAUC) using permutation tests.

*Results*: AI-based reconstruction significantly improved visual quality compared to naïve (IFFT) reconstruction MRI at R4 (SSIM 0.78±0.02 vs 0.68±0.03, p<0.001) and R8 (SSIM 0.67±0.03 vs 0.51±0.03, p<0.001), however, no significant improvements in diagnostic performance were observed for R4 (pAUC FROC 1.33 [CI 1.28-1.39] vs 1.29 [CI 1.23-1.35], p=0.37), nor R8 (pAUC FROC 1.12 [CI 1.07-1.17] vs 0.95 [CI 1.89-1.01], p=0.067). AI-based reconstruction resulted in 0.1 or more decrease in sensitivity compared to unaccelerated MRI.

*Conclusion*: Recovery of visual quality in reconstructions does not correlate with recovering diagnostic quality, emphasizing the importance of measuring diagnostic value rather than visual similarity. AI reconstruction tools should be approached with care because they might have been optimized to reconstruct visually appealing images instead of diagnostic images.
