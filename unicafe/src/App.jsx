import { useState } from 'react';

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const total = good + neutral + bad;

	const average = () => {
		if (total === 0) return 0;

		const totalScore = good - bad;
		return totalScore / total;
	};

	const positive = () => {
		if (total === 0) return 0;

    return (good / total ) * 100

	};

	return (
		<div>
			<section>
				<h1>Give Feedback</h1>
				<button onClick={() => setGood(good + 1)}>Good</button>
				<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
				<button onClick={() => setBad(bad + 1)}>Bad</button>
			</section>

			<section>
				<h2>Statistics</h2>
				<p>Good {good}</p>
				<p>Neutral {neutral}</p>
				<p>Bad {bad}</p>
				<p>All: {total}</p>
				<p>Average: {average()}</p>
				<p>Positive: {positive()} %</p>
			</section>
		</div>
	);
};

export default App;
