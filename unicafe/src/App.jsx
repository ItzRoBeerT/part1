import { useState } from 'react';

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
	<>
		<td>{text}</td>
		<td>{value}</td>
	</>
);

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
	return total === 0 ? (
		<p>No feedback given</p>
	) : (
		<section>
			<h2>Statistics</h2>
			<table>
				<tbody>
					<tr>
						<StatisticLine text={'Good'} value={good} />
					</tr>
				</tbody>
				<tbody>
					<tr>
						<StatisticLine text={'Neutral'} value={neutral} />
					</tr>
				</tbody>
				<tbody>
					<tr>
						<StatisticLine text={'Bad'} value={bad} />
					</tr>
				</tbody>
				<tbody>
					<tr>
						<StatisticLine text={'All'} value={total} />
					</tr>
				</tbody>
				<tbody>
					<tr>
						<StatisticLine text={'Average'} value={average.toFixed(1)} />
					</tr>
				</tbody>
				<tbody>
					<tr>
						<StatisticLine text={'Positive'} value={positive.toFixed(1) + '%'} />
					</tr>
				</tbody>
			</table>
		</section>
	);
};

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

		return (good / total) * 100;
	};

	return (
		<div>
			<section>
				<h1>Give Feedback</h1>
				<Button onClick={() => setGood(good + 1)} text={'Good'} />
				<Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
				<Button onClick={() => setBad(bad + 1)} text={'Bad'} />
			</section>

			<Statistics
				average={average()}
				bad={bad}
				good={good}
				neutral={neutral}
				positive={positive()}
				total={total}
			/>
		</div>
	);
};

export default App;
