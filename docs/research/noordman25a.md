---
pageClass: research
title: C. R. Noordman, et al. (2025)
---
# Deep learning–based temporal MR image reconstruction for accelerated interventional imaging during in-bore biopsies

## 📚 Citation
C. R. Noordman, S. J. W. Borgers, M. F. Boomsma, T. C. Kwee, M. M. G. van der Lees, C. G. Overduin, M. de Rooij, D. Yakar, J. J. Fütterer and H. J. Huisman, "Deep learning–based temporal MR image reconstruction for accelerated interventional imaging during in-bore biopsies" _Journal of Medical Imaging_ 12, 3 (2025).

<ActionButton action="This paper is open access!" link="https://doi.org/10.1117/1.JMI.12.3.035001" />

## 📖 Abstract
**Purpose**

Interventional MR imaging struggles with speed and efficiency. We aim to accelerate transrectal in-bore MR-guided biopsies for prostate cancer through undersampled image reconstruction and instrument localization by image segmentation.

**Approach**

In this single-center retrospective study, we used 8464 MR 2D multislice scans from 1289 patients undergoing a prostate biopsy to train and test a deep learning–based spatiotemporal MR image reconstruction model and a nnU-Net segmentation model. The dataset was synthetically undersampled using various undersampling rates (R=8, 16, 25, 32). An annotated, unseen subset of these data was used to compare our model with a nontemporal model and readers in a reader study involving seven radiologists from three centers based in the Netherlands. We assessed a maximum noninferior undersampling rate using instrument prediction success rate and instrument tip position (ITP) error.

**Results**

The maximum noninferior undersampling rate is 16-times for the temporal model (ITP error: 2.28 mm, 95% CI: 1.68 to 3.31, mean difference from reference standard: 0.63 mm, P=.09), whereas a nontemporal model could not produce noninferior image reconstructions comparable to our reference standard. Furthermore, the nontemporal model (ITP error: 6.27 mm, 95% CI: 3.90 to 9.07) and readers (ITP error: 6.87 mm, 95% CI: 6.38 to 7.40) had low instrument prediction success rates (46% and 60%, respectively) compared with the temporal model’s 95%.

**Conclusion**

Deep learning–based spatiotemporal MR image reconstruction can improve time-critical intervention tasks such as instrument tracking. We found 16 times undersampling as the maximum noninferior acceleration where image quality is preserved, ITP error is minimized, and the instrument prediction success rate is maximized.
