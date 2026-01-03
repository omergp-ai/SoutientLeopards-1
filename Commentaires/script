document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    const recipientSelect = document.getElementById('recipient');
    const playerNameGroup = document.getElementById('playerNameGroup');
    const contactInfoGroup = document.getElementById('contactInfoGroup');
    const replyRadios = document.querySelectorAll('input[name="reply"]');
    const form = document.getElementById('suggestionForm');
    const feedback = document.getElementById('feedbackMessage');

    // Afficher/Masquer le champ Nom du Joueur
    recipientSelect.addEventListener('change', (e) => {
        playerNameGroup.style.display = (e.target.value === 'Joueur') ? 'block' : 'none';
    });

    // Afficher/Masquer le champ Contact
    replyRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            contactInfoGroup.style.display = (e.target.value === 'yes') ? 'block' : 'none';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const recipient = recipientSelect.value;
        const player = document.getElementById('playerName').value || "N/A";
        const message = document.getElementById('suggestion').value;
        const wantsReply = document.querySelector('input[name="reply"]:checked').value;
        const contact = document.getElementById('contactDetail').value || "Aucune coordonnée fournie";

        // Génération du PDF en Français
        const doc = new jsPDF();
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(15, 23, 42); 
        doc.text("LÉOPARDS 2026 : SOUMISSION OFFICIELLE", 20, 25);
        
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Date de génération : ${new Date().toLocaleString('fr-FR')}`, 20, 35);
        
        doc.setDrawColor(212, 175, 55); 
        doc.setLineWidth(1);
        doc.line(20, 40, 190, 40);

        doc.setFontSize(14);
        doc.setTextColor(0);
        doc.text(`À L'ATTENTION DE : ${recipient}`, 20, 55);
        
        if(recipient === 'Joueur') {
            doc.text(`CONCERNE : Joueur - ${player}`, 20, 65);
        }

        doc.setFont("helvetica", "bold");
        doc.text("CONTENU DE LA SUGGESTION :", 20, 85);
        
        doc.setFont("helvetica", "normal");
        const splitMessage = doc.splitTextToSize(message, 170);
        doc.text(splitMessage, 20, 95);

        // Section réponse
        doc.setFont("helvetica", "bold");
        doc.text(`Réponse souhaitée : ${wantsReply === 'yes' ? 'OUI' : 'NON'}`, 20, 180);
        doc.text(`Contact : ${contact}`, 20, 190);

        // Téléchargement du PDF
        doc.save(`Suggestion_Leopards2026.pdf`);

        // Feedback UI Final
        form.style.opacity = '0';
        setTimeout(() => {
            form.classList.add('hidden');
            feedback.classList.remove('hidden');
            feedback.innerHTML = `
                <h2 style="color:var(--gold); margin-top:0;">Document Finalisé</h2>
                <p style="color:white; font-size:1.1rem;">Votre suggestion officielle pour <strong>${recipient}</strong> a été téléchargée au format PDF.</p>
                <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:20px 0;">
                <p style="font-size:0.9rem; color:#94a3b8;">Étape finale : Envoyez le fichier téléchargé à :</p>
                <p style="color:var(--gold); font-weight:bold; font-size:1.1rem;">TeamUS-leopards2026@mail.com</p>
                <a href="mailto:TeamUS-leopards2026@mail.com?subject=Suggestion Officielle pour ${recipient}&body=Veuillez trouver ci-joint ma suggestion pour la campagne Léopards 2026." 
                   style="display:inline-block; margin-top:15px; background:var(--gold); color:var(--navy-bg); padding:12px 25px; border-radius:12px; text-decoration:none; font-weight:bold;">
                   Ouvrir l'E-mail & Joindre le PDF
                </a>
            `;
        }, 300);
    });
});
