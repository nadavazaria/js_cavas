// Select the canvas element and get the 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const generateBars = () => {
  const listBars = [];
  for (let index = 0; index < 100; index++) { // Reduce to 100 for better visual effect
    listBars.push({
      value: Math.floor((Math.random() * 1000)),
      color: null
    });
  }

  // Assign colors based on initial value
  listBars.forEach(bar => {
    bar.color = `rgb(0, ${Math.round((bar.value / 1000) * 255)}, ${255 - Math.round((bar.value / 1000) * 255)})`;
  });

  return listBars;
};

const listBars = generateBars();

const drawBarChart = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  const barWidth = canvas.width / listBars.length;
  for (let i = 0; i < listBars.length; i++) {
    const bar = listBars[i];
    const barHeight = (bar.value / 1000) * canvas.height;
    // Use the color assigned earlier
    ctx.fillStyle = bar.color;
    // Draw the bar
    ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth , barHeight); // Minus 1 to ensure gap
  }
};

// Bubble sort with animation frame update
const sortBars = () => {
  let length = listBars.length;
  let swapped;
  const reorder = () => {
    swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (listBars[i].value > listBars[i + 1].value) {
        let temp = listBars[i];
        listBars[i] = listBars[i + 1];
        listBars[i + 1] = temp;
        swapped = true;
        break; // Break after each swap to visualize the change
      }
    }
    drawBarChart(); // Redraw the bar chart after any swap
    if (swapped) {
      requestAnimationFrame(reorder); // Continue the sorting in next frame
    }
  };
  // Start the sorting process
  requestAnimationFrame(reorder);
};

// Start drawing the initial unsorted bar chart
drawBarChart();
// Start sorting animation after a short delay for visibility
setTimeout(sortBars, 1000);
