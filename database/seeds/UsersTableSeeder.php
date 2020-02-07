<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = Str::random(8);
        DB::table('users')->truncate();

        DB::table('users')->insert([
            'name' => 'Вагнер Владимир',
            'email' => 'vagnervn174@gmail.com',
            'password' => Hash::make($password),
        ]);

        $this->command->info('Создан пользователь с email vagnervn174@gmail.com и паролем '.$password);
    }
}
