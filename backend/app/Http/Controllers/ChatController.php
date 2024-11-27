<?php

namespace App\Http\Controllers;

use App\Events\NewRoom;
use App\Http\Requests\ChatRoomRequest;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function createChatRoom(ChatRoomRequest $payload)
    {
        $roomId = uniqid();
        $validated = $payload->safe();
        broadcast(new NewRoom($validated['title'], $validated['description'], $roomId, Auth::user()->user_name))->toOthers(); 

        return response()->json([
            'success' => true,
            'roomId' => $roomId,
        ]);
    }
}
