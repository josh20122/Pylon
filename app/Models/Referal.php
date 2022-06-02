<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referal extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'referers_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
