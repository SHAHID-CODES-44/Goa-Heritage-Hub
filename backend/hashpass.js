import bcrypt from 'bcrypt';

const password = 'shahid@3826';

const generateHash = async (password) => {
  const saltRounds = 10;  // Recommended is 10 or more
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Hashed password:', hash);
  } catch (error) {
    console.error('Error generating hash:', error);
  }
};

generateHash(password);
