module.exports = {
  dialect: 'sqlite',
  storage: './workout.sqlite',
  define: {
    timestamps: true,
    freezeTableName: true,
  },
};
