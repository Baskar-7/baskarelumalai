import Route from '@ember/routing/route';

export default class ProjectScreenshotsRoute extends Route {
  model() {
    var home_page = [
      {
        id: 1,
        url: '/home/home_page1.png',
        description:
          'Home page - Contains the Streaming and Upcoming movie details and also contains some filters...',
      },
      {
        id: 2,
        url: '/home/home_page2.png',
        description: '',
      },
      {
        id: 3,
        url: '/home/home_page3.png',
        description: 'SignUp/Login Container',
      },
      {
        id: 4,
        url: '/home/home_page4.png',
        description: '',
      },
      {
        id: 5,
        url: '/home/home_page5.png',
        description:
          'Host Conatiner - Where the users made a request for the Host privilege to the admin by using this form',
      },
      {
        id: 6,
        url: '/home/home_page6.png',
        description:
          'Display the Show Details and available show at each Theatres..',
      },
      {
        id: 7,
        url: '/home/home_page7.png',
        description: 'Trailers',
      },
      {
        id: 8,
        url: '/home/home_page8.png',
        description: 'Booking Page',
      },
      {
        id: 9,
        url: '/home/home_page9.png',
        description: 'Booking Confirmation',
      },
    ];

    var profile_page = [
      {
        id: 1,
        url: '/profile/profile1.png',
        description:
          'Profile - Contains personal as well as Buisness(Requires Host/Admin privilege) information, where we can change and update our profile.',
      },
      {
        id: 2,
        url: '/profile/profile2.png',
        description: '',
      },
      {
        id: 3,
        url: '/profile/profile3.png',
        description:
          'We can view theatres Screen details and update seatings with different dimensions as well as we can delete this screens also.(Requires Host/Admin privelge)',
      },
      {
        id: 4,
        url: '/profile/profile4.png',
        description: '',
      },
      {
        id: 5,
        url: '/profile/profile5.png',
        description:
          'We can add new Screen under their respective theatres and add seatings as per the blue print with various dimensions.(Requires Host/Admin privilege)',
      },
      {
        id: 6,
        url: '/profile/profile6.png',
        description:
          'Manage User/Host accounts(Requires Admin privilege) this can only handle by the admin. Where Admin can upgrade an account to Host as well as to User and also he can remove those accounts..',
      },
      {
        id: 7,
        url: '/profile/profile7.png',
        description:
          'Manage Host/New_Theatre requests(Requires Admin privilege) this can only handle by the admin. Where Admin can accept a Host request as well as theatre requests...',
      },
      {
        id: 8,
        url: '/profile/profile8.png',
        description: 'History - Booking history',
      },
      {
        id: 9,
        url: '/profile/profile9.png',
        description:
          'History - Show History where the host can see their hosted movies and view their total earnings and also close & open shows and delete their shows...',
      },
    ];

    return { home: home_page, profile: profile_page };
  }
}
