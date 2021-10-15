console.log('provess.env.JAWSDB_URL: >> ', process.env.JAWSDB_URL);
module.exports = {
    dialect: 'mysql',
    url: process.env.JAWSDB_URL,
    
    define: {
        timestamps: true,
        underscored: true,
    },
};