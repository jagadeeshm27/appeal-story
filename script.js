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
                text: 'I was diagnosed with keratoconus when I was 14. After multiple surgeries and post-surgery complications, I faced recurring flare-ups with cloudy vision, severe redness, and pain. The stitches in my cornea sometimes loosened and poked my eyelid, causing extreme pain. This continued even after I arrived in the UK. My GP confirmed my diagnosis and referred me to a specialist for review, noting these flare-ups have affected my vision and studies since August 2023.'
            },
            {
                title: 'Impact on Studies and COMP315 Exam',
                text: 'My eye flare-ups continued unpredictably in the UK, making studying and working difficult. For assignments, I managed to adjust by working in short bursts, but the one-day exam format for COMP315 was different. During the exam in May 2025, I suffered a severe flare-up, which made it extremely difficult to read and write. Despite my strong understanding of the subject and high coursework scores, I fell just 6 marks short of a pass due to these circumstances.'
            }
        ],
        'hotspot2': [
            {
                title: 'Why I Did Not Submit an EC in Time',
                text: 'I did not submit an EC claim during the exam period because my condition was at its worst. When results came out, the student portal incorrectly showed I had a "Pass with Merit." I went in person to the Computer Science Student Experience Team, and a staff member, Elle, reassured me several times that I had passed my MSc and had not been given an exit award. It was only on 21 July 2025 that I learned my official record showed an exit award. This was devastating, as I had lost valuable time acting in good faith on incorrect information from the university.'
            }
        ],
        'hotspot3': [
            {
                title: 'The Wider Impact: Family, Career, and Visa',
                text: 'My mother, who is my only family and suffers from rheumatoid arthritis, mortgaged our home and is paying a heavy monthly interest to support my education. I have a job offer and another career opportunity that would allow me to repay this debt and lift the burden from her shoulders. However, all of this depends on my MSc, as my Graduate Route visa expires on 26 September 2025. Without the degree, I will lose my visa, career, and our family home.'
            }
        ],
        'hotspot4': [
            {
                title: 'My Respectful Request for Discretion',
                text: 'I am not asking for sympathy, but for fairness. I believe my situation meets the university’s own criteria for "exceptional circumstances." A resit is not a solution, as it would make me ineligible for the Graduate Route visa. For me, this is about my entire future, my family’s survival, and honouring the sacrifices that brought me here. I respectfully ask the Committee to exercise discretion and award me the MSc I have worked for, as I have consistently demonstrated the ability and determination required to earn it.'
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
