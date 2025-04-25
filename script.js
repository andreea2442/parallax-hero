document.addEventListener('mousemove', (e) => {
  const layers = document.querySelectorAll('.layer');
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 10;
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
