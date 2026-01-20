window.MathJax = {
  loader: {
    load: ['[tex]/ams', '[tex]/bbm', '[tex]/bboldx', '[tex]/mathtools']
  },
  tex: {
    packages: {
      '[+]': ['ams', 'bbm', 'bboldx', 'mathtools']
    },
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processRefs: true,
    processEnvironments: true,
    macros: {
      E: "{\\mathbbm{E}}",
      V: "{\\mathbbm{V}}",
      Pr: "{\\mathbbm{P}}",
      I: "{\\mathbbm{I}}",
      R: "{\\mathbbm{R}}",
      Pf: "{\\mathsf{P}}",
      M: "{\\mathsf{M}}",
      Pm: "{\\mathcal{P}}",
      D: "{\\mathcal{D}}",
      F: "{\\mathcal{F}}",
      C: "{\\mathcal{C}}",
      G: "{\\mathcal{G}}",
      X: "{\\mathcal{X}}",
      Z: "{\\mathcal{Z}}",
      A: "{\\mathcal{A}}",
      Ob: "{\\mathbf{O}}",
      Lb: "{\\mathbf{L}}",
      Ab: "{\\mathbf{A}}",
      Yb: "{\\mathbf{Y}}",
      Hold: "{\\mathcal{H}}",
      lik: "{\\mathcal{L}}",
      logit: "{\\operatorname{logit}}",
      expit: "{\\operatorname{expit}}",
      argmin: "{\\operatorname*{arg\\,min}}",
      argmax: "{\\operatorname*{arg\\,max}}",
      indep: "{\\perp\\!\\!\\!\\perp}",
      notindep: "{\\centernot{\\perp\\!\\!\\!\\perp}}",
      coloneqq: "{\\mathrel{\\vcenter{:}}=}",
      iid: "{\\,\\, \\mathbin{\\overset{\\text{iid}}{\\sim}} \\,\\,}",
      asto: "{\\mathbin{\\underset{a.s.}{\\to}}}",
      pto: "{\\mathbin{\\underset{p}{\\to}}}",
      dto: "{\\mathbin{\\underset{d}{\\to}}}"
    }
  },
  chtml: {
    font: 'mathjax-modern'
  },
  startup: {
    ready: () => {
      console.log('MathJax is loaded and ready with font: mathjax-asana (Asana Math)');
      MathJax.startup.defaultReady();
    }
  }
};
