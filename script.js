document.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.hotspot');
    const modal = document.getElementById('issueModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const prevButton = document.getElementById('prevIssue');
    const nextButton = document.getElementById('nextIssue');

    let currentHotspotId = '';
    let currentIssueIndex = 0; // For cycling through issues within a hotspot

    // Data for your issues - structured for cycling
    const issueData = {
        'hotspot1': [ // Results Day Mix-up icon
            {
                title: 'Issue 1: Incorrect Results Day Advice',
                text: 'On my results day, I was incorrectly told by university staff that I had passed my degree with a "MSc Pass with Merit." This incorrect information caused me to believe everything was fine and prevented me from taking immediate action to address the failing module.'
            },
            {
                title: 'Issue 2: Contradictory Advice (IAG vs. Student Experience)',
                text: 'When I later realized the initial information was incorrect, I sought guidance. The International Advice and Guidance (IAG) team correctly advised me to contact the Student Union (Guild). However, a member of the Student Experience team then explicitly told me it was too late to involve the Guild and that I should instead apply for a retrospective EC directly, leading to further delays and confusion.'
            },
            {
                title: 'Issue 3: False Hope from IAG Email',
                text: 'Following the submission of my retrospective EC, an email from the IAG team implied that I could potentially be granted a Master\'s degree as an outcome of the EC process. This gave me false hope and caused me to wait weeks for a decision that ultimately was not what was suggested.'
            }
        ],
        'hotspot2': [ // Conflicting Advice (email/letter icon)
            {
                title: 'Issue 4: The Final Diploma Decision & Two Failing Modules',
                text: 'On September 8th, I finally learned that the EC process was for a resit, not for granting a degree. On the same day, the university officially changed my award to a Postgraduate Diploma (Dip). Compounding this, the university is now acknowledging two separate modules where I was just short of a pass (one with 3 marks less, another with 6 marks less), proving a consistent impact from my medical condition. Yet, they opted for a diploma.'
            }
        ],
        'hotspot3': [ // Visa Deadline icon
            {
                title: 'Issue 5: Imminent Visa Expiry & Job Offer at Risk',
                text: 'The university\'s decision to offer a resit in 2025-26, and to award a Postgraduate Diploma, is unworkable because my Graduate Route visa expires on September 26, 2025. I also have a job offer contingent on obtaining my Master\'s degree. The university\'s proposed solution completely ignores these critical and time-sensitive circumstances, putting my entire future in the UK at risk.'
            }
        ],
        'hotspot4': [ // Two modules (diploma/document icon)
            {
                title: 'Issue 6: Contradiction in Compensation Policy',
                text: 'Despite university policy suggesting only one module can be compensated for an award, the university\'s own staff have acknowledged that I have *two* modules where I was just short of a pass. This indicates a consistent impact of my medical condition. However, the decision made still results in a Diploma, which seems illogical given the clear pattern and the exceptional circumstances outlined in the university\'s own policy 5.5(b) allowing awards "notwithstanding any failed assessments" in exceptional circumstances.'
            }
        ]
        // Add more hotspots and issues as needed
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
            currentIssueIndex = 0; // Reset to first issue for new hotspot
            updateModalContent();
            modal.style.display = 'flex'; // Use flex to center
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close when clicking outside the modal content
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
