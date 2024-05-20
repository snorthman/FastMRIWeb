---
pageClass: research
title: Q. van Lohuizen, et al. (2024a)
---
# Assessing deep learning reconstruction for faster prostate MRI: visual vs. diagnostic performance metrics

## 📚 Citation
van Lohuizen, Q., Roest, C., Simonis, F. F., Fransen, S. J., Kwee, T. C., Yakar, D., & Huisman, H. (2024). Assessing deep learning reconstruction for faster prostate MRI: visual vs. diagnostic performance metrics. European Radiology, 1-9.

## 📖 Abstract
*Objective*: Deep learning (DL) MRI reconstruction enables fast scan acquisition with good visual quality, but the diagnostic impact is often not assessed because of large reader study requirements. This study used existing diagnostic DL to assess the diagnostic quality of reconstructed images.

*Materials and Methods*: A retrospective multisite study of 1535 patients assessed biparametric prostate MRI between 2016 and 2020. Likely clinically significant prostate cancer (csPCa) lesions (PI-RADS >= 4) were delineated by expert radiologists. T2-weighted scans were retrospectively undersampled, simulating accelerated protocols. DL reconstruction (DLRecon) and diagnostic DL detection (DLDetect) were developed. The effect on the partial area under (pAUC), the Free-Response Operating Characteristic (FROC) curve, and the structural similarity (SSIM) were compared as metrics for diagnostic and visual quality, respectively. DLDetect was validated with a reader concordance analysis. Statistical analysis included Wilcoxon, permutation, and Cohen’s kappa tests for visual quality, diagnostic performance, and reader concordance.
 
*Results*: DLRecon improved visual quality at 4- and 8-fold (R4, R8) subsampling rates, with SSIM (range: −1 to 1) improved to 0.78 ± 0.02 (p < 0.001) and 0.67 ± 0.03 (p < 0.001) from 0.68 ± 0.03 and 0.51 ± 0.03, respectively. However, diagnostic performance at R4 showed a pAUC FROC of 1.33 (CI 1.28–1.39) for DL and 1.29 (CI 1.23–1.35) for naive reconstructions, both significantly lower than fully sampled pAUC of 1.58 (DL: p = 0.024, naïve: p = 0.02). Similar trends were noted for R8.

*Conclusion*: DL reconstruction produces visually appealing images but may reduce diagnostic accuracy. Incorporating diagnostic AI into the assessment framework offers a clinically relevant metric essential for adopting reconstruction models into clinical practice.

*Clinical relevance statement*: In clinical settings, caution is warranted when using DL reconstruction for MRI scans. While it recovered visual quality, it failed to match the prostate cancer detection rates observed in scans not subjected to acceleration and DL reconstruction.