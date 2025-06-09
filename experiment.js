
const timeline = [];

const trial = {
  type: 'visual-search-circle',
  target: 'red',
  foil: 'blue',
  set_size: 8,
  choices: [' '], // Spacebar
  target_present: true,
  stimulus_duration: 2000,
  trial_duration: 3000,
  data: { task: 'visual_search' }
};

for (let i = 0; i < 100; i++) {
  timeline.push(trial);
}

jsPsych.init({
  timeline: timeline,
  on_finish: function () {
    jsPsych.data.displayData(); // Show data at the end (for demo)
  }
});
