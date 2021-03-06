
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
        // Inserts seed entries
        // hashed_password is for password = test
        knex('users').insert([
          {
            id: 100101,
            first_name: 'Steve',
            last_name: 'Rogers',
            phone_number: '3105551212',
            email_address: 'steveRogers@gmail.com',
            admin: true,
            hashed_password: '$2b$10$jSqWG63uTWXj4rto4GEqjuQ1BfJCv9NaHUADcEJsY1bFgY/5HJuzG',
          },
          {
            id: 100102,
            first_name: 'Tony',
            last_name: 'Stark',
            phone_number: '3035551212',
            email_address: 'tonyStark@gmail.com',
            admin: false,
            hashed_password: '$2b$10$jSqWG63uTWXj4rto4GEqjuQ1BfJCv9NaHUADcEJsY1bFgY/5HJuzG',
          },
          {
            id: 100103,
            first_name: 'Thor',
            last_name: 'GodOfThunder',
            phone_number: '7205551212',
            email_address: 'thor@gmail.com',
            admin: false,
            hashed_password: '$2b$10$jSqWG63uTWXj4rto4GEqjuQ1BfJCv9NaHUADcEJsY1bFgY/5HJuzG',
          }
        ])
        .then(() => knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`))
    ]))
}
