<?php

namespace Tests\Feature\Models;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EventTest extends TestCase
{
    public function test_can_fill_model()
    {
        $event = new \App\Models\Event();

        $event->fill([
            'title' => 'Evento de teste',
            'description' => 'Descrição do evento de teste',
            'starts_at' => '2018-01-01 12:00:00',
            'ends_at' => '2018-01-01 13:00:00',
            'location' => [
                'name' => 'Nome do local',
                'address' => 'Endereço do local',
                'number' => 'Número do local',
            ],
            'event_type_id' => 1,
        ]);

        $this->assertEquals('Evento de teste', $event->title);
        $this->assertEquals('Descrição do evento de teste', $event->description);
    }
}
