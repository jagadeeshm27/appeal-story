document.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.hotspot');
    const modal = document.getElementById('issueModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const prevButton = document.getElementById('prevIssue');
    const nextButton = document.getElementById('nextIssue');

    let currentHotspotId = '';
    let currentIssueIndex = 0;

    const issueData = {
        'hotspot1': [
            {
                title: 'Medical Background and Eye Condition',
                text: 'I was diagnosed with keratoconus at age 14. After multiple surgeries, I continued to suffer from recurring complications, including cloudy vision, severe redness, and pain. My GP confirmed my diagnosis of advanced keratoconus, noting these frequent flare-ups have affected my vision and studies since August 2023. These complications made it extremely difficult to read and write, especially during one-day exams.'
            },
            {
                title: 'Impact on Studies and COMP315 Exam',
                text: 'My eye flare-ups continued unpredictably in the UK, making studying difficult. For assignments, I managed to adjust by working in short bursts, but the one-day exam format for COMP315 was different. During the exam in May 2025, I suffered a severe flare-up, which made it extremely difficult to read and write. Despite my strong understanding of the subject and high coursework scores, I fell just 6 marks short of a pass due to these circumstances.'
            }
        ],
        'hotspot2': [
            {
                title: 'Why I Did Not Submit an EC in Time',
                text: 'I did not submit an EC claim during the exam period because my condition was at its worst. When results were released, the portal showed a "Pass with Merit." A staff member, Elle, confirmed multiple times that I had passed my MSc, which caused me to miss the EC deadline. It was only on 21 July 2025 that I learned my official record showed an exit award. This was devastating, as I had lost valuable time acting in good faith on incorrect information from the university.'
            }
        ],
        'hotspot3': [
            {
                title: 'The Wider Impact: Family, Career, and Visa',
                text: 'My mother, who raised me as a single parent, mortgaged our home and is paying a heavy monthly interest to support my education. I have a job offer that would allow me to repay this debt, but it depends on my MSc. Without it, my Graduate Route visa, which expires on 26 September 2025, is at risk, as is my career and our home. I cannot bear the thought of returning home with debt after all my mother has sacrificed.'
            }
        ],
        'hotspot4': [
            {
                title: 'My Respectful Request for Discretion',
                text: 'I am not asking for sympathy, but for fairness. I believe my situation meets the university’s own criteria for "exceptional circumstances" (as per policy 5.5b). A resit is not a solution, as it would make me ineligible for the Graduate Route visa. The university's own records show that I was just short of a pass on two different modules, which proves a consistent impact from my health condition. I am pleading with the committee to exercise discretion and award me the MSc I have worked for.'
            }
        ]
    };

    function updateModalContent() {
        const issuesForHotspot = issueData[currentHotspotId];
        if (issuesForHotspot && issuesForHotspot.length > 0) {
            modalTitle.textContent = issuesForHotspot[currentIssueIndex].title;
            modalText.textContent = issuesForHotspot[currentIssueIndex].text;

            prevButton.disabled = currentIssueIndex === 0;
            nextButton.disabled = currentIssueIndex === issuesForHotspot.length - 1;
        }
    }

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            currentHotspotId = hotspot.id;
            currentIssueIndex = 0;
            updateModalContent();
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIssueIndex > 0) {
            currentIssueIndex--;
            updateModalContent();
        }
    });

    nextButton.addEventListener('click', () => {
        const issuesForHotspot = issueData[currentHotspotId];
        if (currentIssueIndex < issuesForHotspot.length - 1) {
            currentIssueIndex++;
            updateModalContent();
        }
    });
});
