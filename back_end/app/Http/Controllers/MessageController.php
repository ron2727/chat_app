<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{

    public function sendMessage(Request $payload): JsonResponse
    {
        $chat_id = uniqid();
        $sender =  new UserResource(Auth::user());
        broadcast(new MessageSent($payload->room_id, $chat_id, $sender, $payload->message))->toOthers(); 
        
        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully',
        ]);
    }
}
