const details = {
  geo: {kicker: 'Computer vision · Individual project', title: 'A photo, a model, and a place on the map.', html: `<p>I built this for my Deep Learning course, working under a five-million-parameter limit. Instead of predicting coordinates directly, my final system combines country classification with geographic-cell predictions.</p><h3>What I tried</h3><p>Coordinate regression, auxiliary country classification, cell balancing, temperature scaling, higher-resolution training, and combining predictions at two resolutions. Some helped; others made good entries in the “well, that didn't work” column.</p><h3>Where it landed</h3><p>The final MobileViTV2 system uses about 4.44 million parameters and achieved a 199.06 km median distance error on my development validation split across 12 European countries.</p><p>That split informed model selection, so the result may be optimistic. The model will still predict coordinates for photos from other countries, but those predictions aren't reliable.</p><p><a href="https://huggingface.co/spaces/arham061/Image-geolocation-challenge">Try a photo in the live demo</a> · <a href="https://github.com/arham061/image-geolocation-challenge">Code, experiments & report</a></p>`},
  thesis: {kicker: "Audio learning · Bachelor's thesis", title: 'Months spent listening, testing, and fine-tuning.', html: `<img src="thesis-cover.jpg" alt="Cover of our final thesis presentation"><p>At GIKI, I worked with Faiza Qadir and Muhammad Hamza Azeem on heart-sound classification for our rheumatic heart disease project. I primarily developed the HuBERT-based model, fine-tuning it and running iterative experiments over several months.</p><h3>My part of the project</h3><p>My notebook includes filtering and normalization experiments, audio export, DistilHuBERT fine-tuning using Hugging Face Transformers, and a Gradio classification demo. Our wider team also developed application prototypes.</p><h3>Results, with context</h3><p>Our thesis reported 95% accuracy for DistilHuBERT and 66% for the LSTM approach. The notebook splits combined original and augmented recordings, so related recordings may appear in both partitions. I treat those as historical project results, not clinical validation or an independent test score.</p><p><a href="https://github.com/arham061/rhd-heart-sound-classification">Explore the notebook, poster, and full project story</a></p>`},
  quant: {kicker: 'Computer vision · Team research project', title: 'Good geometry is not a given.', html: `<p>In our Computer Vision course project at UTN, we explored how low-bit VGGT changes the geometry used by 3D Gaussian Splatting. The study compares full precision, W4A4, W3A3, and recovery approaches using camera correction and learned reliability.</p><h3>What made it interesting</h3><p>Camera correction can improve upstream geometry without necessarily improving the final reconstruction. Rejecting unreliable views can help when there is enough coverage, but hurts when only a few views are available. Our repository keeps these negative results alongside the successful experiments.</p><p>The generic low-bit implementation also wasn't faster than full precision. Practical efficiency gains need appropriate low-bit kernels.</p><h3>The team</h3><p>Prabin Sharma Poudel, Mohan Manideep Danda, and me. This is a team project; the repository documents our collective work and evaluation.</p><p><a href="https://quantsplat.arham061.workers.dev/">Explore the interactive demo</a> · <a href="https://github.com/arham061/3D-Reconstruction">Read the experiments and code</a></p>`}
};
const dialog = document.querySelector('#project-dialog');
let opener;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = details[button.dataset.project];
  if (!project || !dialog) return;
  opener = button;
  document.querySelector('#dialog-kicker').textContent = project.kicker;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-content').innerHTML = project.html;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); opener?.focus(); });
