import { useState } from 'react';

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];

	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
	console.log(votes);

	const [selected, setSelected] = useState(0);
	const [mostSelected, setMostSelected] = useState(0);

	const generateAnecdote = () => {
		const max = anecdotes.length;

		const random = Math.floor(Math.random() * max);
		console.log(random);

		setSelected(random);
	};

	const addVote = () => {
		const copy = [...votes];
		copy[selected] += 1;
		setVotes(copy);

		if (copy[selected] > copy[mostSelected]) {
			setMostSelected(selected);
		}
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<p>{anecdotes[selected]}</p>
			<p>Has {votes[selected]} votes</p>

			<button onClick={addVote}>Vote</button>
			<button onClick={generateAnecdote}>Next anecdote</button>

			<div>
				<h2>Anecdote with most votes</h2>
				<p>{anecdotes[mostSelected]}</p>
				<p>Has {votes[mostSelected]} votes</p>
			</div>
		</div>
	);
};

export default App;
