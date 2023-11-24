
        document.getElementById('quizForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const form = e.target;
            const userAnswers = {
                q1: form.q1.value,
                q2: form.q2.value,
                q3: form.q3.value,
                q4: form.q4.value,
                q5: form.q5.value,
				q6: form.q6.value,
            };
            const correctAnswers = {
                q1: 'two',
                q2: 'three',
                q3: 'one',
                q4: 'one',
                q5: 'four',
				q6: 'two',
            };
            let score = 0;

            for (const question in userAnswers) {
                if (userAnswers[question] === correctAnswers[question]) {
                    score++;
                }
            }

            const results = document.getElementById('results');
            results.innerHTML = `You scored ${score} out of 6`;
        });
 