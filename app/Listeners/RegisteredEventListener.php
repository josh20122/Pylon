<?php

namespace App\Listeners;

use App\Events\RegisteredEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RegisteredEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\RegisteredEvent  $event
     * @return void
     */
    public function handle(RegisteredEvent $event)
    {
        //
    }
}
