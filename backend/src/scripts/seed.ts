import sequelize from '@config/database';
import Contact from '@models/contact';

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced.');

    // Insere um registro inicial
    await Contact.create({
      name: 'John Doe',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    });
    console.log('Sample contact created.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
})();
