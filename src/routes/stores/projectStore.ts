import { writable } from 'svelte/store';

const grade = writable(5);
const theme = writable("우리나라");

const selectedMission = writable<number[]>([1,2,3]);
const selectedQuest = writable<number[]>([4,5,6]);
const selectedAction = writable<number[]>([6,7,8]);


export {
    grade, theme, selectedQuest, selectedMission, selectedAction
}