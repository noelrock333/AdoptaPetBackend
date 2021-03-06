
exports.up = function(knex) {
  return knex.schema
    .createTable('mascotas', function (table) {
      table.increments('id').primary();
      table.string('nombre', 255);
      table.string('categoria', 255);
      table.string('foto');
      table.string('descripcion');
      table.string('anunciante');
      table.string('ubicacion');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('mascotas')
};
