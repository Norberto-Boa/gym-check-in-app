# App

Gym Check in APP

## Functional Requirements
- [x] User must be able to register
- [x] User must be able to authenticate
- [x] Must be able to get the logged user profile data
- [] Must be able to get the logged user previous check-ins number
- [ ] User must be able to see the history of the check-ins
- [x] User must be able to search for near gyms (less than 10 km distance)
- [x] User must be able to search for gyms by name 
- [x] User must be able to check-in on gyms 
- [ ] User must be able to check in
- [x] Must be able to register gym

## Business Rules
- [x] User must not be registered with duplicate email;
- [x] User cannot make two check-ins on the same day;
- [x] User cannot make check-in if is in a distance higher than (100m from the gym);
- [ ] Check-in validation must be done within 20 minutes after creation;
- [ ] Check-in must only be validated by admins
- [ ] Check-in can only be registered by admins

## Non-Functional Requirements
- [x] Password must be encrypted;
- [ ] Data must be stored in the database PostgreSQL;
- [ ] Every data must be listed at maximum with 20 items per page;
- [ ] The user must be identified by JWT