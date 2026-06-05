

/* ==========================
   КАРТОЧКИ УРОКОВ
========================== */

function renderLessons(lessons) {

    const container =
        document.getElementById(
            "lessonsContainer"
        );

    container.innerHTML = "";

    lessons.forEach(lesson => {

        const subjectInfo =
            allSubjects.find(
                subject =>
                    subject.code ===
                    lesson.subject
            );

        container.innerHTML += `

        <div class="lesson-card">

            <div
                class="subject-badge"
                style="
                    background:
                    ${subjectInfo?.color || '#999'}
                "
            >
                ${subjectInfo?.icon || '📘'}
                ${lesson.subject}
            </div>

            <span class="lesson-id">
                ${lesson.id}
            </span>

            <h3>
                ${lesson.title_pl}
            </h3>

            <p>
                ${lesson.title_ua}
            </p>

            <p>
                Класс:
                ${lesson.class}
            </p>

            <p>
                Статус:
                ${lesson.status}
            </p>

            ${
                lesson.url
                    ? `
                <a
                    href="${lesson.url}"
                    target="_blank"
                    class="lesson-button"
                >
                    Открыть урок
                </a>
                `
                    : ""
            }

        </div>

        `;
    });
}
