<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = Events::get();

        return response()->json([
            'data' => $events,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEventRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEventRequest $request)
    {
        if (auth()->user()->cannot('create', Event::class)) {
            return response()->json([
                'message' => 'You are not authorized to create an event.',
            ], 403);
        }

        $validated = $request->validated();

        $event = Event::create($validated);

        return response()->json([
            'data' => $event,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return response()->json([
            'data' => $event,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEventRequest  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        if (auth()->user()->cannot('update', $event)) {
            return response()->json([
                'message' => 'You are not authorized to update this event.',
            ], 403);
        }

        $validated = $request->validated();

        $event->update($validated);

        return response()->json([
            'data' => $event,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        if (auth()->user()->cannot('delete', $event)) {
            return response()->json([
                'message' => 'You are not authorized to delete this event.',
            ], 403);
        }

        $event->delete();

        return response()->json([
            'data' => $event,
        ]);
    }
}
