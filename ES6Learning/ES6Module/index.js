import {person} from './person.js'

const sing = document.getElementById('sing');
const dance = document.getElementById('dance');
const run = document.getElementById('run');
const cry = document.getElementById('cry');
sing.onclick = person.sing;
dance.onclick = person.dance;
run.onclick = person.run;
cry.onclick = person.cry;