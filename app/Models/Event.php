<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'start_at',
        'end_at',
        'location',
        'event_type_id',
    ];

    protected $casts = [
        'location' => 'json',
    ];

    public function eventType()
    {
        return $this->belongsTo(EventType::class);
    }
}
