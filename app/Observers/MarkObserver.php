<?php

namespace App\Observers;

use App\Models\Mark;

class MarkObserver
{
    /**
     * Handle the Mark "created" event.
     */
    public function created(Mark $mark): void
    {

    }

    /**
     * Handle the Mark "updated" event.
     */
    public function updated(Mark $mark): void
    {

    }

    /**
     * Handle the Mark "deleted" event.
     */
    public function deleted(Mark $mark): void
    {
        //
    }

    /**
     * Handle the Mark "restored" event.
     */
    public function restored(Mark $mark): void
    {
        //
    }

    /**
     * Handle the Mark "force deleted" event.
     */
    public function forceDeleted(Mark $mark): void
    {
        //
    }
}
