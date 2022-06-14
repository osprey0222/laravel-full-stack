<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $eventTypes = [
            [
                'name' => 'League Match',
            ],
            [
                'name' => 'Friendly Match',
            ],
            [
                'name' => 'Tournament',
            ],
            [
                'name' => 'Other',
            ],
        ];

        foreach ($eventTypes as $eventType) {
            \App\Models\EventType::create($eventType);
        }
    }
}
