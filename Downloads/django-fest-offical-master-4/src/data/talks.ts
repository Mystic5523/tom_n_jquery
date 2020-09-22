// export interface Topic {
//     name: string;
//     slidesLink: string;
//     worksheetLink: string;
//     areLinksEnabled: boolean;
// }

// export const TOPICS: Topic[] = [{
//     name: 'The Glass: HTML',
//     slidesLink: 'http://bit.ly/cnchtmlslide',
//     worksheetLink: 'http://bit.ly/cnchtmlwork',
//     areLinksEnabled: true
// }, {
//     name: 'The Garnish: CSS',
//     slidesLink: 'http://bit.ly/cnccssslides',
//     worksheetLink: 'http://bit.ly/cnccsswork',
//     areLinksEnabled: true
// }, {
//     name: 'The Rocks: Git',
//     slidesLink: 'http://bit.ly/cncgitslides',
//     worksheetLink: 'http://bit.ly/cncgitwork',
//     areLinksEnabled: true
// }, {
//     name: 'The Liquor: JavaScript',
//     slidesLink: 'http://bit.ly/cncjavascriptslides',
//     worksheetLink: 'http://bit.ly/cncjavascriptwork',
//     areLinksEnabled: true
// }, {
//     name: 'The Mixer: Interactive',
//     slidesLink: 'http://bit.ly/cncinteractiveslides',
//     worksheetLink: 'http://bit.ly/cncinteractivework',
//     areLinksEnabled: true
// }, {
//     name: 'Enjoy! CodeJam',
//     slidesLink: 'http://bit.ly/CnCNovSlides',
//     worksheetLink: 'http://bit.ly/cncenjoywork', // not created yet. need to figure out name
//     areLinksEnabled: false
// }];

export interface Talk {
    date: string;
    time: string;
    name: string;
    eventbriteLink: string;
    eventbriteIFrameLink: string;
    areLinksEnabled: boolean;
}

export const TALKS: Talk[] = [{
    date: '2020-01-12',
    time: '6-8pm',
    name: 'TechTalk January',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
},
  {
    date: '2020-02-12',
    time: '6-8pm',
    name: 'TechTalk February',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-03-12',
    time: '6-8pm',
    name: 'TechTalk March',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-04-12',
    time: '6-8pm',
    name: 'TechTalk April',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-05-12',
    time: '6-8pm',
    name: 'TechTalk May',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-06-12',
    time: '6-8pm',
    name: 'TechTalk June',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-07-12',
    time: '6-8pm',
    name: 'TechTalk July',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-08-12',
    time: '6-8pm',
    name: 'TechTalk August',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-09-12',
    time: '6-8pm',
    name: 'TechTalk September',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
{
    date: '2020-10-12',
    time: '6-8pm',
    name: 'TechTalk October',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-11-12',
    time: '6-8pm',
    name: 'TechTalk November',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  },
  {
    date: '2020-12-12',
    time: '6-8pm',
    name: 'TechTalk December',
    eventbriteLink: 'https://www.eventbrite.com/e/techtalk-presents-hour-of-code-tickets-77412965263',
    eventbriteIFrameLink: '//eventbrite.com/tickets-external?eid=77412965263',
    areLinksEnabled: true
  }];

// Month to display for upcoming talk. Use 7 for July, 8 for Aug, etc
export const UPCOMING_TALK_MONTH = 1;

