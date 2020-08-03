import React, { useState, useEffect } from "react";
import { Calendar as MyCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createEvent, getEvent } from "../../actions/events";
import PropTypes from "prop-types";

function Calendar({ userId, eventsList, createEvent, getEvent }) {
  const localizer = momentLocalizer(moment);
  const [show, setShow] = useState(false);
  const [events, setEvents] = useState({
    title: "",
    desc: "",
    start: "",
    end: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setEvents({ ...events, start: e.start, end: e.end });
    setShow(true);
  };
  const { title, desc, start, end } = events;

  const onChange = (e) =>
    setEvents({ ...events, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    console.log(e);
    const eventsList = Array(events);
    setShow(false);
    e.preventDefault();
    createEvent({ userId, eventsList });
  };

  useEffect(() => {
    getEvent(userId);
  }, []);

  return (
    <div>
      <MyCalendar
        localizer={localizer}
        events={eventsList}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={handleShow}
        views={["month", "day"]}
      />
      click or drag on date to create an event
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form' onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='title'
                name='title'
                value={title}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='description'
                name='desc'
                value={desc}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='datetime-local'
                placeholder='start date and time'
                name='start'
                value={start}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='datetime-local'
                placeholder='end date and time'
                name='end'
                value={end}
                onChange={onChange}
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Create' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Calendar.propTypes = {
  userId: PropTypes.string,
  eventsList: PropTypes.array,
  createEvent: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.auth.user._id,
  eventsList: state.events.events,
});

export default connect(mapStateToProps, { createEvent, getEvent })(Calendar);
