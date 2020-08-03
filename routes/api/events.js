const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Events = require('../../models/Events');

//@route  GET api/posts
//@desc   Test route
//@access Public

router.get('/', async (req, res) => {
  try {
    const events = await Events.findOne({ userId: req.query.userId });
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    let { userId, events } = req.body;

    let eventsObject = await Events.findOne({ userId: userId });

    events = [...eventsObject.events, ...events];

    eventsObject = await Events.findOneAndUpdate(
      { userId: userId },
      { events: events },
      { returnOriginal: false }
    );
    res.status(200).json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
