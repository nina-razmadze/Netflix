import { Component, ViewChild } from '@angular/core';
import { Qustion } from '../../../../core/models/question.model';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrl: './questions-table.component.css',
})
export class QuestionsTableComponent {
  @ViewChild('desc') answer;
  questionsArray: Qustion[] = [
    {
      id: 0,
      name: 'what is netflix?',
      description:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected device',
    },
    {
      id: 1,
      name: 'What much does Netflix cost?',
      description:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 9.39 to EUR 13.99 a month. No extra costs, no contracts.',
    },
    {
      id: 2,
      name: 'Where can I watch?',
      description: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      id: 3,
      name: 'how do I cancel?',
      description:
        'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      id: 4,
      name: 'What can I watch on Netflix?',
      description:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      id: 5,
      name: 'Is Netflix good for kids?',
      description: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 9.39 to EUR 13.99 a month. No extra costs, no contracts.The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
    {
      id: 6,
      name: 'Why am I seeing language?',
      description:
        'Your browser preferences determine the language shown here.',
    },
  ];
}
