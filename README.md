## Technical Test: Senior React Frontend Developer Position at Exoticca

This technical test is the first step of the recruitment process for the Senior React Frontend Developer position at Exoticca. You have been given 72 hours to complete this assignment.

### Before You Begin ⚠️
Before you start, we urge you to carefully read this message. The purpose of this technical test is to provide us with a detailed insight into your programming skills and your ability to tackle tasks based on requirements. We value the creation of well-structured and tested code, going beyond mere feature completeness. We understand that you enjoy programming, and we do too! However, it is crucial that you immerse yourself in understanding the test. We strongly request that you do not begin coding without thoroughly reviewing the test requirements. Don't drink too much coffee 😉.

### Dream Travels ✈️
We are thrilled to introduce you to our new adventure: Dream Travels! Here, we are not just building an application but the perfect place to bring your travel dreams to life. Imagine a space where you can organize your desired destinations and keep a record of those unforgettable moments that have already brought a smile to your face! Dream Travels is your space to add wild destinations and keep the flame of your past adventures alive. It's like your own dream journal, but with a passport! Get ready to bring to life those destinations you've always wished for. Welcome to Dream Travels, where your travel dreams become a reality.

### What will Travel Dreams do in its MVP 🚀
- It will have an initial view with the default list of trips received from the endpoint, including trip titles, details, and the thumbnail of the trip.
- We will be able to filter by any text found on the cards, both by details and by title or description.
- You will be able to select one of the cards, and it will show the details of the same, with all the information about the trip, including the itinerary and the large image of the trip. This should happen for both upcoming and previously completed trips.
- From the initial view, you should be able to delete the trip and edit it.
- You should be able to mark a trip as completed from the detailed view of the trip.
- Bidirectional navigation between completed trips and those yet to be completed should be possible.
- There will be a view where we can find the trips that you already completed in the past, possibly similar to the view of upcoming trips.
- In this view, you will also be able to set a trip as upcoming, in case you want to repeat it. You never know 🙂.
- The application should work inside a browser on any device.

### As a plus ✨
- Don't know where to go? Want the destination to be chosen for you? Let's add this functionality:
  - Add a button that randomly selects one of the trips listed. When the trip is selected, the randomly chosen trip should be displayed with a countdown to prepare for the journey, which is dynamically calculated based on the current date and set to three months in the future. This information should be saved, so every time you access the website, you would see the time remaining until the trip starts. For example, if you select it today, the countdown will reflect the exact number of days until the trip starts, considering the variable lengths of the months. If you access the website tomorrow, the countdown will adjust accordingly.
  - You won't be able to randomly select another trip if you have already chosen one before.
- Here we provide a linked Figma for you to have examples of the design you should use 🖌: [Design](https://www.figma.com/design/arhp4iZhMsFxm6idFrqtPm/Trips-maker?node-id=0-1)

### Technical details 🖥
- This is the endpoint against which you will have to make requests: [Dream Travels Endpoint](https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels)
  - [Guide to use it](https://jsonplaceholder.typicode.com/guide/)
- Tests are mandatory.
- Using TypeScript is mandatory.
- Using NextJS is optional.
- Using Styled components is optional.
